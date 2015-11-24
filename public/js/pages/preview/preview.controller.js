'use strict';

eLibraryApp.controller('PreviewCtrl', ['previewService', '$state', function(previewService, $state) {

  function convertDate(books) {
    books.forEach(function(book) {
      var publicationDate = new Date(book.publicationDate);

      book.publicationDate = publicationDate.getDate() + '.' + (publicationDate.getMonth() + 1) + '.' + publicationDate.getFullYear();
    });
  }

  function cleanUpData(filters) {
    var cleanedData = {};

    for (var filter in filters) {
      if (filters.hasOwnProperty(filter) && filters[filter].useFilter) {
        cleanedData[filter] = {};
        for (var filterProperty in filters[filter]) {
          if (filters[filter].hasOwnProperty(filterProperty) && filterProperty !== 'useFilter') {
            cleanedData[filter][filterProperty] = filters[filter][filterProperty];
          }
        }
      }
    }

    return cleanedData;
  }

  function loadBooks(books) {
    convertDate(books);
    this.books = books;
  }

  this.books = [];

  this.filters = {
    price: {
      useFilter: false,
      from: null,
      to: null
    },
    numberOfPages: {
      useFilter: false,
      from: null,
      to: null
    },
    publicationDate: {
      useFilter: false,
      date: null
    },
    bookType: {
      useFilter: false,
      list: ['book', 'newspaper', 'magazine'],
      selected: [false, false, false]
    }
  };

  this.getFilteredList = function() {
    previewService.getFilteredBooks(cleanUpData(this.filters)).then(loadBooks.bind(this));
  };

  previewService.getBooks().then(loadBooks.bind(this));
}]);

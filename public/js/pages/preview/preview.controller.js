'use strict';

eLibraryApp.controller('PreviewCtrl', ['previewService', '$state', function(previewService, $state) {

  function convertTime(books) {
    books.forEach(function(book) {
      var publicationDate = new Date(book.publicationDate);

      book.publicationDate = publicationDate.getDate() + '.' + (publicationDate.getMonth() + 1) + '.' + publicationDate.getFullYear();
    });
  }

  function loadBooks(books) {
    convertTime(books);
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
    previewService.getFilteredBooks(this.filters).then(loadBooks.bind(this));
  };

  previewService.getBooks().then(loadBooks.bind(this));
}]);

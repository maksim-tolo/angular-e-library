'use strict';

eLibraryApp.service('previewService', ['$resource', '$state', function($resource) {
  var Books = $resource('/api/books/:id');
  this.getBooks = function() {
    return Books.query().$promise;
  };
  this.getFilteredBooks = function(filters) {
    return Books.query(filters).$promise;
  }
}]);
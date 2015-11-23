'use strict';

eLibraryApp.controller('PreviewCtrl', ['$scope', '$state', function($scope, $state) {
  this.filters = {
    price: {
      from: 0,
      to: 0
    },
    numberOfPages: {
      from: 0,
      to: 0
    },
    publicationDate: {
      from: 0,
      to: 0
    },
    bookType: {
      list: ['book', 'newspaper', 'magazine'],
      selected: ['book']
    }
  }
}]);

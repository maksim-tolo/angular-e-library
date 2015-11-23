'use strict';

var eLibraryApp = angular
  .module('eLibraryApp', ['ui.router', 'ngResource', 'ui.bootstrap.datepicker'])
  .config(['$stateProvider', '$urlRouterProvider', Config]);

function Config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/books');

  $stateProvider
    .state('preview', {
      url: '/books',
      templateUrl: './js/pages/preview/preview.template.html',
      controller: 'PreviewCtrl',
      controllerAs: 'previewCtrl'
    })
    .state('details', {
      url: '/books/:id',
      templateUrl: './js/pages/details/details.template.html',
      controller: 'DetailsCtrl'
    });
}
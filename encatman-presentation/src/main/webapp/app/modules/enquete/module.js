define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/enquete/services/module');
  require('app/modules/enquete/controllers/module');

  return require('angular')
    .module('app.enquete', [
      'ui.router',
      'app.enquete.controllers',
      'app.enquete.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('enquete.list', {
          url: '/list',
          templateUrl: 'app/modules/enquete/views/list.html',
          controller: 'EnqueteListController'
        })
        .state('enquete.insert', {
          url: '/insert',
          templateUrl: 'app/modules/enquete/views/form.html',
          controller: 'EnqueteFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/enquete/new');
            }]
          }
        })
        .state('enquete.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/enquete/views/form.html',
          controller: 'EnqueteFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/enquete/' + $stateParams.id);
            }]
          }
        });
    })
});
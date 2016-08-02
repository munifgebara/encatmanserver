define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/opcao/services/module');
  require('app/modules/opcao/controllers/module');

  return require('angular')
    .module('app.opcao', [
      'ui.router',
      'app.opcao.controllers',
      'app.opcao.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('opcao.list', {
          url: '/list',
          templateUrl: 'app/modules/opcao/views/list.html',
          controller: 'OpcaoListController'
        })
        .state('opcao.insert', {
          url: '/insert',
          templateUrl: 'app/modules/opcao/views/form.html',
          controller: 'OpcaoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/opcao/new');
            }]
          }
        })
        .state('opcao.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/opcao/views/form.html',
          controller: 'OpcaoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/opcao/' + $stateParams.id);
            }]
          }
        });
    })
});
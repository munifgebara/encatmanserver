define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/resposta/services/module');
  require('app/modules/resposta/controllers/module');

  return require('angular')
    .module('app.resposta', [
      'ui.router',
      'app.resposta.controllers',
      'app.resposta.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('resposta.list', {
          url: '/list',
          templateUrl: 'app/modules/resposta/views/list.html',
          controller: 'RespostaListController'
        })
        .state('resposta.insert', {
          url: '/insert',
          templateUrl: 'app/modules/resposta/views/form.html',
          controller: 'RespostaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/resposta/new');
            }]
          }
        })
        .state('resposta.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/resposta/views/form.html',
          controller: 'RespostaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/resposta/' + $stateParams.id);
            }]
          }
        });
    })
});
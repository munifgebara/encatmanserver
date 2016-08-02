define(function (require) {
    var angular = require('angular');
    require('app/modules/opcao/services/module');
    require('angular-ui-router');

    return angular
            .module('app.opcao.controllers', ['app.opcao.services','ui.router'])
            .controller('OpcaoFormController', require('app/modules/opcao/controllers/OpcaoFormController'))
            .controller('OpcaoListController', require('app/modules/opcao/controllers/OpcaoListController'));
});
define(function (require) {
    var angular = require('angular');
    require('app/modules/resposta/services/module');
    require('angular-ui-router');

    return angular
            .module('app.resposta.controllers', ['app.resposta.services','ui.router'])
            .controller('RespostaFormController', require('app/modules/resposta/controllers/RespostaFormController'))
            .controller('RespostaListController', require('app/modules/resposta/controllers/RespostaListController'));
});
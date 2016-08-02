define(function (require) {
    var angular = require('angular');
    require('app/modules/enquete/services/module');
    require('angular-ui-router');

    return angular
            .module('app.enquete.controllers', ['app.enquete.services','ui.router'])
            .controller('ModalOpcaoController', require('app/modules/enquete/controllers/ModalOpcaoController'))
            .controller('EnqueteFormController', require('app/modules/enquete/controllers/EnqueteFormController'))
            .controller('EnqueteListController', require('app/modules/enquete/controllers/EnqueteListController'));
});
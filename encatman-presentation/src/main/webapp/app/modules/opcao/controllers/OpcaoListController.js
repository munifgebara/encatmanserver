define([], function() {

  OpcaoListController.$inject = ['$scope', 'OpcaoService', 'gumgaController'];

  function OpcaoListController($scope, OpcaoService, gumgaController) {

    gumgaController.createRestMethods($scope, OpcaoService, 'opcao');

    OpcaoService.resetDefaultState();
    $scope.opcao.execute('get');

    $scope.tableConfig = {
      columns: 'enquete ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'enquete',
        title: '<span gumga-translate-tag="opcao.enquete"> enquete </span>',
        content: '{{$value.enquete }}',
        sortField: 'enquete'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="opcao.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return OpcaoListController;
});

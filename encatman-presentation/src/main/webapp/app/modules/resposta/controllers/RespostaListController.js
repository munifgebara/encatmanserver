define([], function() {

  RespostaListController.$inject = ['$scope', 'RespostaService', 'gumgaController'];

  function RespostaListController($scope, RespostaService, gumgaController) {

    gumgaController.createRestMethods($scope, RespostaService, 'resposta');

    RespostaService.resetDefaultState();
    $scope.resposta.execute('get');

    $scope.tableConfig = {
      columns: 'opcao ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'opcao',
        title: '<span gumga-translate-tag="resposta.opcao"> opcao </span>',
        content: '{{$value.opcao }}',
        sortField: 'opcao'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="resposta.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return RespostaListController;
});

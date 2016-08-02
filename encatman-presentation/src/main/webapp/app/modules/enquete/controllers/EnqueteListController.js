define([], function() {

  EnqueteListController.$inject = ['$scope', 'EnqueteService', 'gumgaController'];

  function EnqueteListController($scope, EnqueteService, gumgaController) {

    gumgaController.createRestMethods($scope, EnqueteService, 'enquete');

    EnqueteService.resetDefaultState();
    $scope.enquete.execute('get');

    $scope.tableConfig = {
      columns: 'titulo ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'titulo',
        title: '<span gumga-translate-tag="enquete.titulo"> titulo </span>',
        content: '{{$value.titulo }}',
        sortField: 'titulo'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="enquete.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return EnqueteListController;
});

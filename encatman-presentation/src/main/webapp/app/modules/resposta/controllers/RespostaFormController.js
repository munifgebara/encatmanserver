define([], function() {


 	RespostaFormController.$inject = ['RespostaService', '$state', 'entity', '$scope', 'gumgaController', 'OpcaoService'];

 	function RespostaFormController(RespostaService, $state, entity, $scope, gumgaController, OpcaoService) {

    	gumgaController.createRestMethods($scope, RespostaService, 'resposta');


	    gumgaController.createRestMethods($scope, OpcaoService, 'opcao');
	    $scope.opcao.methods.search('enquete','');    

    
    	$scope.resposta.data = entity.data || {};
		$scope.resposta.data.momento = ($scope.resposta.data.momento == undefined || $scope.resposta.data.momento == "") ? new Date() : new Date($scope.resposta.data.momento);
        $scope.openmomento = function() {
        	$scope.openedMomento = !$scope.openedMomento;
        };

		$scope.continue = {};
	
		$scope.resposta.on('putSuccess',function(data){
			$state.go('resposta.list');
		});
 	}
	
	return RespostaFormController;   
});
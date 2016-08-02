define([], function() {


 	OpcaoFormController.$inject = ['OpcaoService', '$state', 'entity', '$scope', 'gumgaController', 'EnqueteService'];

 	function OpcaoFormController(OpcaoService, $state, entity, $scope, gumgaController, EnqueteService) {

    	gumgaController.createRestMethods($scope, OpcaoService, 'opcao');


	    gumgaController.createRestMethods($scope, EnqueteService, 'enquete');
	    $scope.enquete.methods.search('titulo','');    

    
    	$scope.opcao.data = entity.data || {};
		$scope.continue = {};
	
		$scope.opcao.on('putSuccess',function(data){
			$state.go('opcao.list');
		});
 	}
	
	return OpcaoFormController;   
});
define([], function() {


 	EnqueteFormController.$inject = ['EnqueteService', '$state', 'entity', '$scope', 'gumgaController'];

 	function EnqueteFormController(EnqueteService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, EnqueteService, 'enquete');



    
    	$scope.enquete.data = entity.data || {};
		$scope.enquete.data.opcoes = $scope.enquete.data.opcoes || [];
		$scope.continue = {};
	
		$scope.enquete.on('putSuccess',function(data){
			$state.go('enquete.list');
		});
 	}
	
	return EnqueteFormController;   
});
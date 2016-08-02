define(['app/apiLocations'], function(APILocation) {

	RespostaService.$inject = ['GumgaRest'];

	function RespostaService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/resposta');

    	return Service;
    }

  	return RespostaService;
});
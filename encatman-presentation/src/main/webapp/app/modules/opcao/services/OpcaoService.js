define(['app/apiLocations'], function(APILocation) {

	OpcaoService.$inject = ['GumgaRest'];

	function OpcaoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/opcao');

    	return Service;
    }

  	return OpcaoService;
});
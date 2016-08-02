define(['app/apiLocations'], function(APILocation) {

	EnqueteService.$inject = ['GumgaRest'];

	function EnqueteService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/enquete');

    	return Service;
    }

  	return EnqueteService;
});
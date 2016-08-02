define(function(require) {
   require('angular')
   .module('app.enquete.services', [])
   .service('EnqueteService', require('app/modules/enquete/services/EnqueteService'));
});
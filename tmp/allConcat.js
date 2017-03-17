var apiKey = require('./../.env').apiKey;

var Lookup = require('./../js/doctor.js').lookupModule;

$(document).ready(function() {
  var currentLookupObject = new Lookup();
  currentLookupObject.getDoctor();




  });
});

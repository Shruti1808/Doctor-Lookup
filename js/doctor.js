var apiKey = require('./../.env').apiKey;
var Lookup = require('./../js/doctor.js').lookupModule;

LookupDoctor = function(){
  this.retrieved = [];
};

Lookup.prototype.getDoctors = function(medicalIssue, displayDoctors){

  var DoctorDataObj = this ;
}

.fail(function(error) {
    console.log("fail");
  });
};

exports.lookupModule = Lookup;

var apiKey = require('./../.env').apiKey;
var DoctorData = require('./../js/doctor.js').doctorModule;

 var displayDoctors = function(medicalIssue, doctorEntry){
   $('.showCondition').append("<h2>The condition you entered is " + medicalIssue + ".</h2>");

   $('.showDoctors').append();

    doctorEntry.forEach(function(entry){'<h2>' +
     entry.profile.first_name + ' ' + entry.profile.last_name + '<br>' + entry.specialties[0].name + '</h2>';
  });
};

$(document).ready(function() {
  var newDoctorData = new DoctorData();

  $('#search-form').submit(function(){
    event.preventDefault();
    newDoctorData.retrieved = [];
    var medicalIssue = $('#condition-input').val();
    newDoctorData.getDoctors(medicalIssue,displayDoctors);
  });
});

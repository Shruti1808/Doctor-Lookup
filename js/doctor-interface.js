var apiKey = require('./../.env').apiKey;
var DoctorData = require('./../js/doctor.js').doctorModule;



$(document).ready(function() {
  var currentDoctorData = new DoctorData();

  $('#search-doctors').click(function(){
    var medicalIssue = $('#condition-input').val();
    $('#condition-input').val("");
    currentDoctorData.getDoctor(medicalIssue);
  });
});

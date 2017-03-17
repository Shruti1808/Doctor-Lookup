// var apiKey = require('./../.env').apiKey;
var DoctorData = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  $('#search-form').submit(function(event){
    event.preventDefault();
    var currentDoctorData = new DoctorData();
    var medicalIssue = $('#condition-input').val();
    $('#condition-input').val("");
    currentDoctorData.getDoctor(medicalIssue);
  });
});

var apiKey = require('./../.env').apiKey;
var DoctorData = require('./../js/doctor.js').doctorModule;

 var displayDoctors = function(medicalIssue, doctor Entry){
   $('.showCondition').append("<h2>The condition you entered is " + medicalIssue + ".</h2>");

   $('.showDoctors').append("<h2>"+ doctorEntry.forEach(entry){
     entry.profile.first_name + ' ' + entry.profile.last_name + "<br>" + entry.specialties[0].name + "</h2>")
   }

 }





$(document).ready(function() {
  var newDoctorData = new DoctorData();

  $('#search-form').submit(function(){
    event.preventDefault();
    newDoctorData.retrieved = [];
    var medicalIssue = $('#condition-input').val();



    newDoctorData.getDoctors(medicalIssue,displayDoctors);
  });
});











// var displayDoctors = function(medicalIssue, doctorEntry) {
//   $('.showCondition').append("<h2>" + "You inputted: " + medicalIssue.capitalizeFirst() + "</h2>");
//   doctorEntry.forEach(function(entry) {
//     $('.showDoctors').append("<div class='content-section-b'> <div class='container'><div class='row'><div class='col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6'><hr class='section-heading-spacer'><div class='clearfix'></div><h2 class='section-heading'>"
//     + entry.profile.first_name + ' ' + entry.profile.last_name + "<br>" + entry.specialties[0].name + "</h2>" + "<p class='lead'>" + entry.profile.bio + "</p> </div> <div class='col-lg-5 col-sm-pull-6  col-sm-6'><img class='img-responsive doc-profile' src=" + entry.profile.image_url + ">"
//     );
//   });
// };
//
// $(document).ready(function(){
//   var newDoctorData = new DoctorData();
//
//   $('#search-form').submit(function(event) {
//     event.preventDefault();
//     newDoctorData.retrieved = [];
//     $('.showCondition').empty();
//     $('.showDoctors').empty();
//     var medicalIssue = $('#condition-input').val();
//     newDoctorData.getDoctors(medicalIssue, displayDoctors);
//   });
//
//
// });

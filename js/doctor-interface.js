var apiKey = require('./../.env').apiKey;
var DoctorData = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var newDoctorData = new DoctorData();

  $('#search-form').submit(function(){
    event.preventDefault();
    var medicalIssue = $('#condition-input').val();
    $('.showCondition').text("The condition you entered is " + medicalIssue + ".");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + 'location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey)
    .then function(result){
      console.log(result);


    }

    newDoctorData.getDoctors();
  });
});



// var DoctorData = require('./../js/doctor.js').doctorModule;
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

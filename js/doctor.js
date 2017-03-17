var apiKey = require('./../.env').apiKey;

DoctorData = function(){

};

DoctorData.prototype.getDoctor = function(medicalIssue){

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=1&user_key=' + apiKey)
  .then(function(response){
    $('.showDoctors').text("The condition you have entered is " + medicalIssue + ".");
      })
      .fail(function(error){
          console.log("fail");
});
};


exports.doctorModule = DoctorData;

//query for list of specialities:  https://api.betterdoctor.com/2016-03-01/specialties?user_key=

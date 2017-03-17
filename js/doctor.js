var apiKey = require('./../.env').apiKey;

DoctorData = function(){
  this.retrieved = [];
};

DoctorData.prototype.getDoctors = function(medicalIssue, displayDoctors){

  var doctorDataObj = this;

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    result.data.forEach(function(dataEntry){
      DoctorDataObj.retrieved.push(dataEntry);
    });

    displayDoctors(medicalIssue , doctorDataObj.retrieved);

    })
    .fail(function(error) {
        console.log("fail");
      });
      this.retrieved = doctorDataObj.retrieved;
};

exports.doctorModule = DoctorData;

//query for list of specialities:  https://api.betterdoctor.com/2016-03-01/specialties?user_key=

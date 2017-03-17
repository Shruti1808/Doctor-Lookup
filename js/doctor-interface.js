var apiKey = require('./../.env').apiKey;

var Lookup = require('./../js/doctor.js').lookupModule;

$(document).ready(function() {
  var currentLookupObject = new Lookup();
  currentLookupObject.getDoctor();

  $('#search-form').submit(function(){
    event.preventDefault();
        var medicalIssue = $('#condition-input').val();
        $('.showCondition').text("The condition you entered is " + medicalIssue + ".");
        $.get('https://api.betterdoctor.com/2016-03-01/doctors?query= ' + medicalIssue + 'location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey)
        .then function(result){


        }

  })


 }



  });
});

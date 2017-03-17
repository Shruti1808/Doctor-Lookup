(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "c62784b962f978cfe0691e677aa67371";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/doctor.js":2}]},{},[3]);

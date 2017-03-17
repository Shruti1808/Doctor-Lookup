(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "c62784b962f978cfe0691e677aa67371";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

DoctorData = function(firstname, lastname, title){
  this.firstname = firstname;
  this.lastname = lastname;
  this.title = title;
};

DoctorData.prototype.getDoctor = function(medicalIssue, doctorEntry){

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=2&user_key=' + apiKey)
  .then(function(response){
    var displayDoctor = doctorEntry(medicalIssue, response.data[i].profile.first_name, response.data[i].profile.last_name, response.data[i].profile.title)
  })
  .fail(function(error){
    console.log("fail");
  });
};

exports.doctorModule = DoctorData;
//query for list of specialities:  https://api.betterdoctor.com/2016-03-01/specialties?user_key=

// https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=1&user_key=c62784b962f978cfe0691e677aa67371

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);

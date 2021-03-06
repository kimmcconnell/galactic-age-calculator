import 'bootstrap';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import './sass/styles.scss';
import { User } from '../src/galactic-age';

$(document).ready(function() {
  let newUser = new User();
  newUser.birthday = "2/7/1991";
  newUser.earthAge();
  $("#galactic-age").submit( function(event) {
    event.preventDefault();
    $(".planetary-ages").empty();
    $(".time-left").empty();
    const age = $("input").val();
    newUser.birthday = age;
    newUser.Earth = newUser.earthAge();
    newUser.galacticAges();
    $(".planetary-ages").append("<li>Your age on Mercury would be <span>" + newUser.Mercury + "</span>.</li>");
    $(".planetary-ages").append("<li>Your age on Venus would be <span>" + newUser.Venus + "</span>.</li>");
    $(".planetary-ages").append("<li>Your age on Mars would be <span>" + newUser.Mars + "</span>.</li>");
    $(".planetary-ages").append("<li>Your age on Jupiter would be <span>" + newUser.Jupiter + "</span>.</li>");
    console.log(newUser);
  });
  $("#galactic-time-left").submit( function(event) {
    event.preventDefault();
    $(".time-left").empty();
     if (newUser.Earth > 0) {
       const country = $(".country").val();
       const gender = parseInt($(".gender").val());
       const smoker = $(".smoker").val();
       const activity = parseInt($(".activity").val());
       const diet = parseInt($(".diet").val());
       newUser.country = country;
       newUser.gender = gender;
       newUser.smoker = smoker;
       newUser.activity = activity;
       newUser.diet = diet;
       newUser.lifeExpEarth = newUser.lifeExpectancy();
       newUser.galacticLifeExp();
       $(".time-left").append("<li>" + newUser.lifeLeft("Mercury") + "</li>");
       $(".time-left").append("<li>" + newUser.lifeLeft("Venus") + "</li>");
       $(".time-left").append("<li>" + newUser.lifeLeft("Mars") + "</li>");
       $(".time-left").append("<li>" + newUser.lifeLeft("Jupiter") + "</li>");
     } else {
       alert("Please enter your age first!");
     }
  });
});

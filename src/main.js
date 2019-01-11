import { Haiku } from './haiku.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'faker';
import { generateWord } from './randomHaiku.js';
var faker = require('faker');

$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();
    var line1 = $("input#firstLine").val();
    var line2 = $("input#secondLine").val();
    var line3 = $("input#thirdLine").val();
    const row1 = new Haiku(line1);
    const row2 = new Haiku(line2);
    const row3 = new Haiku(line3);

    var check1 = row1.anotherCount();
    // console.log(check1);
    if (check1 === 5) {
      $('#firstLine')
        .removeClass("form-control is-invalid")
        .addClass("form-control is-valid");
    } else {
      $('#firstLine')
        .addClass("form-control is-invalid");
    }
    var check2 = row2.anotherCount();
    // console.log(check2);
    if (check2 === 7) {
      $('#secondLine')
        .removeClass("form-control is-invalid")
        .addClass("form-control is-valid");
    } else {
      $('#secondLine')
        .addClass("form-control is-invalid");
    }
    var check3 = row3.anotherCount();
    // console.log(check3);
    if (check3 === 5) {
      $('#thirdLine')
        .removeClass("form-control is-invalid")
        .addClass("form-control is-valid");
    } else {
      $('#thirdLine')
        .addClass("form-control is-invalid");
    }
  });

  $("#first").click(function(event){
    event.preventDefault();
    var randomWord = faker.random.word();
    var randomHaiku = new Haiku(randomWord);
    var check4 = randomHaiku.anotherCount();
    var syllable = 2
    var randomWord = generateWord(check4, syllable)
  $("#firstLine").attr("value", `${randomWord}` + " is to the");
  });

  $("#second").click(function(event){
    event.preventDefault();
    var randomWord = faker.random.word();
    var randomHaiku = new Haiku(randomWord);
    var check4 = randomHaiku.anotherCount();
    var syllable = 5
    var randomWord = generateWord(check4, syllable)
  $("#secondLine").attr("value", `${randomWord}` + ", and the");
  });


  $("#third").click(function(event){
    event.preventDefault();
    var randomWord = faker.random.word();
    var randomHaiku = new Haiku(randomWord);
    var check4 = randomHaiku.anotherCount();
    var syllable = 3
    var syllable2 = 1
    var randomWord = generateWord(check4, syllable)
    var randomWord2 = generateWord(check4, syllable2)
  $("#thirdLine").attr("value", `${randomWord}` + " that " + `${randomWord2}`);
  });

  $("#save").click(function(event) {
    event.preventDefault();
    var line1 = $("input#firstLine").val();
    var line2 = $("input#secondLine").val();
    var line3 = $("input#thirdLine").val();
    const row1 = new Haiku(line1);
    const row2 = new Haiku(line2);
    const row3 = new Haiku(line3);
    $(".saveHaiku").append( "<p>" + line1 + "<br>" +line2 + "<br>" +line3 + "</p>");
  });
});

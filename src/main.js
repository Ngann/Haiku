import { Haiku } from './haiku.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'faker';
var faker = require('faker');
// import { randomHaiku } from './randomHaiku.js';



var randomHaiku = function() {
  var array = [];
  var sentence = array.join(" ");
  var syllables = sentence.runCount();
  if (syllables <= 17) {
    for(var i = 0; i < sentence.length; i++) {
      var randomWords = faker.random.word();
      array.push(randomWords);
    }
  } else {
    return sentence;
  }
};


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
    var array = [];
    var randomWord = faker.random.word();
    array.push(randomWord);
    console.log("word:", randomWord);

    var sentence = array.join(" ");
    const row4 = new Haiku(sentence);

    var syllables = row4.anotherCount();
    if (syllables < 18) {
      for(var i = 0; i < sentence.length; i++) {
        var randomWords = faker.random.word();
        array.push(randomWords);
        console.log("array:", array);
      }
      console.log(array.join(" "))
      return array.join(" ")
    }

    console.log(syllables);
    $("#firstLine").attr("value", `${sentence}`);
  });

});

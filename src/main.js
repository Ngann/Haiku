import { Haiku } from './haiku.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// const haiku = "something something something"
// haiku = new Haiku

$(document).ready(function() {
  $("#first").click(function(event) {
    event.preventDefault();
    var haiku = $("input#firstLine").val();
    console.log(haiku)
    const haikuObj = new Haiku(haiku);
    var check = haikuObj.anotherCount();
    if (check === 5) {
      $('#firstLine').addClass("form-control is-valid")
    } else {
      $('#firstLine').addClass("form-control is-invalid")
    }
    $(".outputFirst").text("syllable count for line one: " + check);
    console.log("haikuObj syllable: ",check);
  });


  $("#second").click(function(event) {
    event.preventDefault();
    var haiku = $("input#secondLine").val();
    console.log(haiku)
    const haikuObj = new Haiku(haiku);
    var checktwo = haikuObj.anotherCount();
    // var checktwo = newCount(haikuObj);
    $(".outputSecond").text("syllable count for line two: " + checktwo);
    console.log("haikuObj syllable: ",checktwo);
  });


  $("#third").click(function(event) {
    event.preventDefault();
    var haiku = $("input#thirdLine").val();
    console.log(haiku)
    const haikuObj = new Haiku(haiku);
    var checktwo = haikuObj.anotherCount();
    // var checktwo = newCount(haikuObj);
    $(".outputThird").text("syllable count for line three: " + checktwo);
    console.log("haikuObj syllable: ",checktwo);
  });
});

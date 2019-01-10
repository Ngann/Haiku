import { Haiku } from './haiku.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// const haiku = "something something something"
// haiku = new Haiku

$(document).ready(function() {
  $("#okay").click(function(event) {
    event.preventDefault();
    var haiku = $("input#testing").val();
    console.log(haiku)
    const haikuObj = new Haiku(haiku);
    var checktwo = haikuObj.anotherCount();
    // var checktwo = newCount(haikuObj);
    $(".output").text("syllable count: " + checktwo);
    console.log("haikuObj syllable: ",checktwo);
  });
});

import { Haiku } from './haiku.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// const haiku = "something something something"
// haiku = new Haiku

$(document).ready(function() {
  var haiku = "A mountain village under the piled-up snow the sound of water";
  const haikuObj = new Haiku(haiku);
  var checktwo = haikuObj.anotherCount();
  // var checktwo = newCount(haikuObj);
  console.log("haikuObj syllable: ",checktwo);
});

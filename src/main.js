import { Haiku } from './haiku.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// const haiku = "something something something"
// haiku = new Haiku

$(document).ready(function() {
  var haiku = "mountain village under the piled-up snow the sound of water";
  const haikuObj = new Haiku(haiku);
  var word = "mountain";
  const wordObj = new Haiku(word);
  var check = wordObj.anotherCount();
  // var check = newCount(wordObj);
  console.log("wordObj syllable",check);
  var checktwo = haikuObj.anotherCount();
  // var checktwo = newCount(haikuObj);
  console.log("haikuObj syllable",checktwo);
});

import { Haiku } from './haiku.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// const haiku = "something something something"
// haiku = new Haiku


$(document).ready(function() {
  var haiku = "A mountain village under the piled-up snow the sound of water";
  haiku = new Haiku(haiku);
});

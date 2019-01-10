import 'faker';
import { Haiku } from './haiku.js';
var faker = require('faker');

export function generateWord(check, syllable) {
      while (check4 != syllable) {
          var randomWord = faker.random.word();
          var randomHaiku = new Haiku(randomWord);
          var check4 = randomHaiku.anotherCount();
      if (check4 === syllable) {
          break
      }
    }
    return randomWord
  }

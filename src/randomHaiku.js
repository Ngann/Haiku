import 'faker';
var faker = require('faker');

randomHaiku = function() {
  var array = [];
  var sentence = array.join(" ");
  var syllables = sentence.runCount();
  if (syllables <= 17) {
    for(var i = 0; i < sentence.length; i++) {
      var randomWords = faker.random.word();
      array.push(randomWords);
      console.log(array)
    }
  } else {
      return sentence;
  }
}

runCount = function() {
  let count = 0;
  let array = this.haiku.split(" ");
  for(var i = 0 ; i < array.length; i++) {
    let syllable = newCount(array[i]);
    count += syllable;
  }
  return count;
}

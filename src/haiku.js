export

class Haiku {
  constructor(input) {
  this.haiku = input;
  this.words = this.haiku.split(" ");
  }

function newCount(word) {
    let input = word.toLowerCase();
    if(word.length <= 3) { return 1; }
     let first = input.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
     console.log(first)
     let second = first.replace(/^y/, '');
     console.log(second)
    return second.match(/[aeiouy]{1,2}/g).length;
  }

function runCount(array) {
    let count = 0;
    for(var i = 0 ; i < array.length; i++) {
      let syllable = newCount(array[i]);
      count += syllable;
    }
    return count;
  }

}

  var haiku = "A mountain village under the piled-up snow the sound of water";
  haiku = new Haiku(haiku);

  for (var i = 0; i < array.length; i++) {
    array[i]
  }

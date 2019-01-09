export

class Haiku {
  constructor(input) {
  this.haiku = input;
  this.words = this.haiku.split(" ");
  }

  function new_count(word) {
    let input = word.toLowerCase();
    if(word.length <= 3) { return 1; }
     let first = input.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
     console.log(first)
     let second = first.replace(/^y/, '');
     console.log(second)
    return second.match(/[aeiouy]{1,2}/g).length;
  }

  runCount() {
    let count = 0;
    for(i = 0 ; i < this.words.length; i++) {
      let syllable = new_count(this.words);
      count += syllable;
    }
  }

}

  var haiku = "A mountain village under the piled-up snow the sound of water";
  haiku = new Haiku(haiku);

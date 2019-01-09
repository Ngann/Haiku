class Haiku {
  constructor(input) {
    this.haiku = input;
  }

  newCount(word) {
    let input = word.toLowerCase();
    if(word.length <= 3) { return 1; }
    let first = input.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    console.log(first)
    let second = first.replace(/^y/, '');
    console.log(second)
    return second.match(/[aeiouy]{1,2}/g).length;
  }

  anotherCount() {
    let array = this.haiku.split(" ");
    for (var i = 0; i < array.length; i++) {
      let first = array[i].replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
      return first.match(/[aeiouy]{1,2}/g).length;
    }
  }

  runCount() {
    let count = 0;
    let array = this.haiku.split(" ");
    for(var i = 0 ; i < array.length; i++) {
      let syllable = array[i].anotherCount();
      console.log(syllable)
      console.log(array[i])
      count += syllable;
    }
    return count;
  }
}

export { Haiku }

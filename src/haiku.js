class Haiku {
  constructor(input) {
    this.haiku = input;
    // this.newCount();
  }

  anotherCount() {
    let count = 0;
    let array = this.haiku.split(" ");
    for (var i = 0; i < array.length; i++) {
      if(array[i].length <= 3) { count += 1;}
      else{
        let first = array[i].replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        let second = first.replace(/^y/, '');
        let syllable = second.match(/[aeiouy]{1,2}/g).length;
        count += syllable;
      }
    }
    return count;
  }

  runCount() {
    let count = 0;
    let array = this.haiku.split(" ");
    for(var i = 0 ; i < array.length; i++) {
      let syllable = newCount(array[i]);
      count += syllable;
    }
    return count;
  }
}

export { Haiku };

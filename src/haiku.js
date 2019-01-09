class Haiku {
  constructor(input) {
    this.haiku = input;
    // this.newCount();
  }

  // newCount(word) {
  //   let input = word.toLowerCase();
  //   if(word.length <= 3) { return 1; }
  //   let first = input.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  //   console.log(first)
  //   let second = first.replace(/^y/, '');
  //   console.log(second)
  //   return second.match(/[aeiouy]{1,2}/g).length;
  // }

  anotherCount() {
    let count = 0;
    let array = this.haiku.split(" ");
    for (var i = 0; i < array.length; i++) {
      if(array[i].length <= 3) { count += 1;}
      else{
        // console.log("array length:", array.length);
        let first = array[i].replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        // console.log("word array index:", array[i]);
        let second = first.replace(/^y/, '');
        let syllable = second.match(/[aeiouy]{1,2}/g).length;
        // console.log("count syllable:", syllable);
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
      console.log(syllable)
      console.log(array[i])
      count += syllable;
    }
    return count;
  }
}

export { Haiku }

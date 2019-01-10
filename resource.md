https://stackoverflow.com/questions/28384718/regex-understanding-syllable-counter-code


// newCount(word) {
//   let input = word.toLowerCase();
//   if(word.length <= 3) { return 1; }
//   let first = input.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
//   console.log(first)
//   let second = first.replace(/^y/, '');
//   console.log(second)
//   return second.match(/[aeiouy]{1,2}/g).length;
// }

import { Haiku } from './../src/haiku.js';

describe('Haiku', function () {

  it('will take a haiku and count each syllable', function() {
    var haiku = "A mountain village under the piled-up snow the sound of water";
    const haikuObj = new Haiku(haiku);
    var checktwo = haikuObj.anotherCount();
    expect(checktwo).toEqual(17);
  });

  it('check daniels Haiku', function() {
    var haiku = "Lollipop day dream Galloping so wild and free Till I wake from sleep";
    const haikuObj = new Haiku(haiku);
    var checktwo = haikuObj.anotherCount();
    expect(checktwo).toEqual(17);
  });

  it('check daniels dinosaur Haiku', function() {
    var haiku = "I love dinasaurs they were my first childhood friend sadly they are dead";
    const haikuObj = new Haiku(haiku);
    var checktwo = haikuObj.anotherCount();
    expect(checktwo).toEqual(17);
  });

  it('It counts the syllables for one word', function() {
    var word = "mountain";
    const haikuObj = new Haiku(word);
    var checktwo = haikuObj.anotherCount();
    expect(checktwo).toEqual(2);
  });

  it('It counts the syllables for the edgecase: bio', function() {
    var word = "bio";
    const haikuObj = new Haiku(word);
    var checktwo = haikuObj.anotherCount();
    expect(checktwo).toEqual(2);
  });

  it('It counts a word with just one syllable', function() {
    var word = "cheese";
    const haikuObj = new Haiku(word);
    var checktwo = haikuObj.anotherCount();
    expect(checktwo).toEqual(1);
  });

  it("check if a three letter word is just one syllable", function() {
    var word = "sea";
    const haikuObj = new Haiku(word);
    var checktwo = haikuObj.anotherCount();
    expect(checktwo).toEqual(1);
  });

  it("check if the edgecase 'ickle' works", function() {
    var word = "pickle";
    const haikuObj = new Haiku(word);
    var checktwo = haikuObj.anotherCount();
    expect(checktwo).toEqual(1);
  });
});

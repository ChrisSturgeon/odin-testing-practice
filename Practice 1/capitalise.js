// A capitalize function that takes a string and returns it with the first character capitalized.

function capitalise(sentence) {
  return sentence.slice(0, 1).toUpperCase() + sentence.slice(1);

}

module.exports = capitalise;
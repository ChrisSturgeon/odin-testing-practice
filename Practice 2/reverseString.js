// A reverseString function that takes a string and returns it reversed.

function reverse(input) {

  let output = input.split("").reverse().join("")

  return output
}

module.exports = reverse;

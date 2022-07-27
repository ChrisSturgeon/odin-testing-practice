// An analyzeArray function that takes an array of numbers and returns an object
// with the following properties: average, min, max, and length.

function analyze(arr) {
  if (typeof arr === 'object') {
    if (arr.every((element) => isNum(element))) {
      return {
        average: function () {
          const total = arr.reduce((cur, prev) => cur + prev, 0);
          return total / arr.length;
        },
        min: function () {
          return Math.min(...arr);
        },
        max: function () {
          return Math.max(...arr);
        },
        length: function () {
          return arr.length;
        },
      };
    } else {
      throw new Error('Not all elements are numbers');
    }
  } else {
    throw new Error('Input must be array');
  }
}

const isNum = (num) => (typeof num === 'number' ? true : false);

module.exports = analyze;

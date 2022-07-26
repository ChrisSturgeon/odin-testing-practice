// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

function calculator(a, b) {
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    return {
      add: function() {
        return a + b;
      },
      subtract: function() {
        return a - b;
      },
      multiply: function() {
        return a * b;
      },
      divide: function() {
        return a / b;
      }
    }
  } else {
    throw new Error('Inputs must be of number type!');
  }
}

module.exports = calculator;

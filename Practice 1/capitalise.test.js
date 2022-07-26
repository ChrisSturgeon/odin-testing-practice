// A capitalize function that takes a string and returns it with the first character capitalized.

const capitalise = require('./capitalise');

test('Check returns string', () => {
  expect(typeof capitalise('Dragon')).toBe('string');
});

test('Check capitalises dog', () => {
  expect(capitalise('dog')).toBe('Dog');
});

test('Capitalise the sentence "hello, you"', () => {
  expect(capitalise('hello, you!')).toBe('Hello, you!');
});

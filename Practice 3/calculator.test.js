// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

const calculator = require('./calculator');

test('throws error if inputs are not numbers', () => {
  expect(() => calculator('2', '78')).toThrow();
});

test('throws error if one inputs is not number', () => {
  expect(() => calculator(5, '78')).toThrow();
});

test('returns object', () => {
  expect(typeof calculator(4, 88)).toBe('object');
});

test('has add function', () => {
  expect(typeof calculator(4, 6).add).toBe('function');
});

test('has subtract function', () => {
  expect(typeof calculator(4, 6).subtract).toBe('function');
});

test('has multiply function ', () => {
  expect(typeof calculator(4, 6).multiply).toBe('function');
});

test('has divide function', () => {
  expect(typeof calculator(4, 6).divide).toBe('function');
});

test('add function returns correct figure', () => {
  expect(calculator(5, 1).add()).toBe(6);
});

test('subtract function returns correct figure', () => {
  expect(calculator(9, 3).subtract()).toBe(6);
});

test('subtract function works with negative numbers', () => {
  expect(calculator(-6, -2).subtract()).toBe(-4);
});

test('multiply function returns correct figure', () => {
  expect(calculator(7, 8).multiply()).toBe(56);
});

test('multiply function works with negative numbers', () => {
  expect(calculator(-7, -7).multiply()).toBe(49);
});

test('divide function returns correct figure', () => {
  expect(calculator(90, 10).divide()).toBe(9);
});


test('divide function works with negative numbers', () => {
  expect(calculator(-100, -20).divide()).toBe(5);
})
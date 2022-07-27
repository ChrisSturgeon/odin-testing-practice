const analyze = require('./analyzeArray');

test('checks input is array', () => {
  expect(() => analyze('This is not an array')).toThrow();
});

test('checks all array elements are numbers', () => {
  expect(() => analyze(['1', 2])).toThrow();
});

test('returns object', () => {
  expect(typeof analyze([1, 2])).toBe('object');
});

test('has average method', () => {
  expect(typeof analyze([1, 2]).average).toBe('function');
});

test('has min method', () => {
  expect(typeof analyze([1, 2]).min).toBe('function');
});

test('has max method', () => {
  expect(typeof analyze([1, 2]).max).toBe('function');
});

test('has length function', () => {
  expect(typeof analyze([1, 2]).length).toBe('function');
});

test('average works with indicies', () => {
  expect(analyze([5, 5, 6, 7]).average()).toBeCloseTo(5.75);
});

test('average works with floating point numbers', () => {
  expect(analyze([0.4, 0.6, 0.2, 9]).average()).toBeCloseTo(2.55);
});

test('min function works with integers', () => {
  expect(analyze([4, 6, 3, 4, 6, 7, 2]).min()).toBe(2);
});

test('min function works with floating point numbers', () => {
  expect(analyze([0.6, 0.2, 0.005, 2, 30298]).min()).toBe(0.005);
});

test('max function works with integers', () => {
  expect(analyze([4, 245, 352, 243524, 2345, 234, 233]).max()).toBe(243524);
});

test('max function works with floating point numbers', () => {
  expect(analyze([0.6, 0.2, 0.005, 2, 30298.42345]).max()).toBe(30298.42345);
});

test('length function returns correct integer', () => {
  expect(analyze([5, 2, 7]).length()).toBe(3);
});

test('length function works with no input', () => {
  expect(analyze([]).length()).toBe(0);
});

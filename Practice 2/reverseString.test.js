// A reverseString function that takes a string and returns it reversed.

const reverse = require('./reverseString')

test('returns string', () => {
  expect(typeof(reverse('testString'))).toBe('string')
})

test('returns correct number of characters', () => {
  expect(reverse('twenty').length).toBe(6)
})

test('return single word reversed', () => {
  expect(reverse('toaster')).toBe('retsaot');
})

test('return a multi-word string', () => {
  expect(reverse('This is a really old dog')).toBe('god dlo yllaer a si sihT')
})


const cipher = require('./cipher')

test('ensure input is string and shift is number', () => {
  expect(() => cipher(223423, 'twentysix')).toThrow();
})

test('returns same length string as input', () => {
  expect(cipher('This is just a long test sentence', 1).length).toBe(33)
})

test('works with single letter', () => {
  expect(cipher('azw', 9)).toBe('jif')
})

test('works with a multi word sentence', () => {
  expect(cipher('this is a test', 1)).toBe('uijt jt b uftu')
})

test('loops full alphabet', () => {
  expect(cipher('this is a test', 26)).toBe('this is a test')
})

test('works with big shift', () => {
  expect(cipher('this is a test', 1300)).toBe('this is a test')
})

test('keeps punctuation', () => {
  expect(cipher('this. is, a! test-', 1)).toBe('uijt. jt, b! uftu-')
})

test('keeps letter case', () => {
  expect(cipher('This is a test', 1)).toBe('Uijt jt b uftu')
})

test('keeps mulitple letter case', () => {
  expect(cipher('ThIs Is A tEsT', 1)).toBe('UiJt Jt B uFtU')
})





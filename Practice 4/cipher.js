function cipher(input, shift) {
  if (typeof input === 'string' && typeof shift === 'number') {
    const numberOfAlphabets = Math.ceil(1 + shift / 26);

    const repeatedAlphabet = makeRepeated(letters, numberOfAlphabets);

    const inputArr = input.split('');

    const outputArr = inputArr.map((character) => {
      let capitalCase;

      if (character === character.toUpperCase()) {
        capitalCase = true;
      } else {
        capitalCase = false;
      }

      if (letters.includes(character.toLowerCase())) {
        if (capitalCase) {
          return repeatedAlphabet[convertToNumber(character.toLowerCase()) + shift].toUpperCase();
        } else {
          return repeatedAlphabet[convertToNumber(character) + shift];
        }
      } else {
        return character;
      }
    });
    return outputArr.join('');
  } else {
    throw new Error('Input must be a string type and shift a number type');
  }
}

function convertToNumber(character) {
  switch (character) {
    case 'a':
      return 0;
    case 'b':
      return 1;
    case 'c':
      return 2;
    case 'd':
      return 3;
    case 'e':
      return 4;
    case 'f':
      return 5;
    case 'g':
      return 6;
    case 'h':
      return 7;
    case 'i':
      return 8;
    case 'j':
      return 9;
    case 'k':
      return 10;
    case 'l':
      return 11;
    case 'm':
      return 12;
    case 'n':
      return 13;
    case 'o':
      return 14;
    case 'p':
      return 15;
    case 'q':
      return 16;
    case 'r':
      return 17;
    case 's':
      return 18;
    case 't':
      return 19;
    case 'u':
      return 20;
    case 'v':
      return 21;
    case 'w':
      return 22;
    case 'x':
      return 23;
    case 'y':
      return 24;
    case 'z':
      return 25;
    default:
      console.log('eggs');
  }
}

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const makeRepeated = (arr, repeats) =>
  Array.from({ length: repeats }, () => arr).flat();

module.exports = cipher;

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
    throw new Error('Input must be a string and shift a number');
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

function convertToLetter(num) {
  switch (num) {
    case 0:
      return 'a';
    case 1:
      return 'b';
    case 2:
      return 'c';
    case 3:
      return 'd';
    case 4:
      return 'e';
    case 5:
      return 'f';
    case 6:
      return 'g';
    case 7:
      return 'h';
    case 8:
      return 'i';
    case 9:
      return 'j';
    case 10:
      return 'k';
    case 11:
      return 'l';
    case 12:
      return 'm';
    case 13:
      return 'n';
    case 14:
      return 'o';
    case 15:
      return 'p';
    case 16:
      return 'q';
    case 17:
      return 'r';
    case 18:
      return 's';
    case 19:
      return 't';
    case 20:
      return 'u';
    case 21:
      return 'v';
    case 22:
      return 'w';
    case 23:
      return 'x';
    case 24:
      return 'y';
    case 25:
      return 'z';
    default:
      console.log('eggggggs');
  }
}

module.exports = cipher;

function createLetterArr(shift) {
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

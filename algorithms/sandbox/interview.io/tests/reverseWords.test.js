const { reverseWords } = require('../reverseWords');

describe('reverseWords', () => {
  it('Must pass given example', () => {
    const input = [
      'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
      'm', 'a', 'k', 'e', 's', ' ',
      'p', 'r', 'a', 'c', 't', 'i', 'c', 'e',
    ];
    const output = [
      'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', ' ',
      'm', 'a', 'k', 'e', 's', ' ',
      'p', 'e', 'r', 'f', 'e', 'c', 't',
    ];

    expect(reverseWords(input)).toEqual(output);
  });
});

function reverseWords(arr) {
  const reverse = [];
  const words = arr.join('').split(' ');

  for (let i = words.length - 1; i > -1; i--) {
    for (let j = 0; j < words[i].length; j++) {
      reverse.push(words[i][j]);
    }
    if (i !== 0) reverse.push(' ');
  }

  return reverse;
}

const input = [
  'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
  'm', 'a', 'k', 'e', 's', ' ',
  'p', 'r', 'a', 'c', 't', 'i', 'c', 'e',
];
console.log(reverseWords(input));

module.exports = { reverseWords };

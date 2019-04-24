/* eslint-disable no-continue */
/* ---------
Naive String Search Exercise - O(n)
Write a function called stringSearchNaive which accepts a string and a search value,
and returns the amount of times the search value appears in the string.

EXAMPLES:
  - stringSearchNaive([10, 15, 20, 25, 30], 15) // 1
  - stringSearchNaive([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
  - stringSearchNaive([100], 100) // 0

NOTE:

TESTS:
  - npm test stringSearchNaive
  - npm test 04-search
  - npm test
--------- */

function stringSearchNaive(str, pattern) {
  let count = 0;

  for (let i = 0; i < str.length - pattern.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) count++;
    }
  }

  return count;
}

// // FAILS - I THOUGHT I COULD OPTIMIZE THIS WAY, BUT NO
// function stringSearchNaive(str, pattern) {
//   let count = 0;

//   for (let i = 0; i < str.length - pattern.length; i++) {
//     for (let j = 0; j < pattern.length; j++) {
//       if (str[i + j] !== pattern[j]) break;
//       if (j === pattern.length - 1) {
//         count++;
//         i += j;
//       }
//     }
//   }

//   return count;
// }

module.exports = { stringSearchNaive };

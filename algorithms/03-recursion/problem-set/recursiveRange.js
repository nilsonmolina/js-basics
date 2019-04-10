/* ---------
Write a function called recursiveRange which accepts a number and adds up all the numbers
from 0 to the number passed to the function.

EXAMPLES:
  - recursiveRange(6) // 21
  - recursiveRange(10) // 55

NOTE:

TESTS:
  - npm test recursiveRange
  - npm test 03-recursion
  - npm test
--------- */

function recursiveRange(n) {
  if (n < 1) return 0;
  return n + recursiveRange(n - 1);
}

module.exports = { recursiveRange };

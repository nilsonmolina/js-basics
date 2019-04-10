/* ---------
Write a function called factorial which accepts a number and returns the factorial of
that number. A factorial is the product of an integer and all the integers below it.
e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.

EXAMPLES:
  - factorial(1) // 1
  - factorial(2) // 2
  - factorial(4) // 24
  - factorial(7) // 5040

NOTE:
  - 0! is always 1

TESTS:
  - npm test factorial
  - npm test 03-recursion
  - npm test
--------- */

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

module.exports = {
  factorial,
};

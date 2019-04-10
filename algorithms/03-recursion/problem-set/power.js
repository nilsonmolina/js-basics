/* ---------
Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.

EXAMPLES:
  - power(2,0) // 1
  - power(2,2) // 4
  - power(2,4) // 16

NOTE:
  - do not worry about negative bases and exponents.

TESTS:
  - npm test power
  - npm test 03-recursion
  - npm test
--------- */

function power(base, exponent) {
  if (exponent <= 0 || base <= 1) return 1;
  return base * power(base, exponent - 1);
}

module.exports = {
  power,
};

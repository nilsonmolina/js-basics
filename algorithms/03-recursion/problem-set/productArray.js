/* ---------
Write a function called productArray which accepts an array of numbers and returns
the product of them all.

EXAMPLES:
  - productOfArray([1,2,3]) // 6
  - productOfArray([1,2,3,10]) // 60

NOTE:

TESTS:
  - npm test productArray
  - npm test 03-recursion
  - npm test
--------- */

function productArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productArray(arr.splice(1));
}

module.exports = {
  productArray,
};

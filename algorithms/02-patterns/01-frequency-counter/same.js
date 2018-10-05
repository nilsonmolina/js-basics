/* ---------
  Write a function called 'same', which accepts two arrays.
  The function should return true if every value in the array
  has it's corresponding value squared in the second array.
  The frequency of values must be the same.

  EXAMPLES
  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false

  NOTE
  Order doesn't matter
--------- */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const counter = {};
  for (const n of arr2) {
    // counter[n] > 0 ? counter[n] += 1 : counter[n] = 1;
    counter[n] = (counter[n] || 0) + 1;
  }

  for (const n of arr1) {
    const squared = n * n;
    if (!counter[squared]) {
      return false;
    }

    counter[squared] -= 1;
  }

  return true;
}

console.log('[1,2,3], [4,1,9]:\t', same([1, 2, 3], [4, 1, 9]));
console.log('[1,2,3], [1,9]:\t\t', same([1, 2, 3], [1, 9]));
console.log('[1,2,1], [4,4,1]:\t', same([1, 2, 1], [4, 4, 1]));

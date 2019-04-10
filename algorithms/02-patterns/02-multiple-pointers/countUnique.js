/* ---------
  Implement a function called 'countUnique', which accepts a
  sorted array and counts the unique values in the array. There
  can be negative numbers in the array, but it will always be
  sorted.

  EXAMPLES
  countUnique([1,1,1,1,1,2]); // 2
  countUnique([1,2,3,4,4,4,7,7,12,12,13]); // 7
  countUnique([]); // 0
  countUnique([-2,-1,-1,0,1]); // 4

  NOTE
  Time complexity of O(n)
--------- */

function countUnique(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  let count = 1;

  for (let j = 1; j < arr.length; j += 1) {
    if (arr[j] !== arr[i]) {
      i = j;
      count += 1;
    }
  }

  return count;
}

/*------------------------------
    ALTERNATIVE SOLUTIONS
------------------------------*/

// // COLTS SOLUTION
// function countUnique(arr) {
//   if (arr.length === 0) return 0;

//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i += 1;
//       arr[i] = arr[j];
//     }
//   }

//   return i + 1;
// }


// USING 'Set' OBJECT
function countUniqueWithSet(arr) {
  return new Set(arr).size;
}


module.exports = {
  countUnique,
  countUniqueWithSet,
};

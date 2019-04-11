/* ---------
Binary Search Exercise - O(logn)
Write a function called binarySearch which accepts a sorted array and a value, and returns
the index at which the value exists. If the value does not exist in the array, return -1.

EXAMPLES:
- binarySearch([1,2,3,4,5],2) // 1
- binarySearch([1,2,3,4,5],3) // 2
- binarySearch([1,2,3,4,5],5) // 4
- binarySearch([1,2,3,4,5],6) // -1
- binarySearch([5, 6, 10, 13, 14, 30, 34, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
- binarySearch([5, 6, 10, 13, 14, 30, 34, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 14
- binarySearch([5, 6, 10, 13, 14, 30, 34, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1

NOTE:
This algorithm should be more efficient than linearSearch you can read how to implement it here:
  - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
  - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

TESTS:
  - npm test binarySearch
  - npm test 04-search
  - npm test
--------- */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.ceil((left + right) / 2);
    if (val === arr[middle]) return middle;
    if (val > arr[middle]) left = middle + 1;
    else if (val < arr[middle]) right = middle - 1;
  }

  return -1;
}

// // COLTS SOLUTION
// function binarySearch(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.ceil((left + right) / 2);

//   while (arr[middle] !== val && left <= right) {
//     if (val > arr[middle]) left = middle + 1;
//     else right = middle - 1;
//     middle = Math.ceil((left + right) / 2);
//   }

//   return arr[middle] === val ? middle : -1;
// }

// // FIRST ATTEMPT - COULD BE IMPROVED
// function binarySearch(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (right - left > 1) {
//     const middle = Math.ceil((left + right) / 2);
//     if (val === arr[middle]) return middle;
//     if (val > arr[middle]) left = middle;
//     else if (val < arr[middle]) right = middle;
//   }
//   if (val === arr[right]) return right;
//   if (val === arr[left]) return left;

//   return -1;
// }

module.exports = { binarySearch };

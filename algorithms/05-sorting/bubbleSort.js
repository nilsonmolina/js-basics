/* ---------
Bubble Sort - O(n^2)


EXAMPLES:
  - bubbleSort([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
  - bubbleSort([1, 2, 5, 3, 4]) // [1, 2, 3, 4, 5]
  - bubbleSort([1, 2, 3, 2, 1]) // [1, 1, 2, 2, 3]

NOTE:

TESTS:
  - npm test bubbleSort
  - npm test 05-sorting
  - npm test
--------- */

// Optimized with noSwaps
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

// // NOT AS OPTIMIZED WHEN NEARLY SORTED
// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// // SHORTER ES6 WAY OF SWAPPING
// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }

//   return arr;
// }

module.exports = { bubbleSort };

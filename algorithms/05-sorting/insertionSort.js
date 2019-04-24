/* ---------
Insertion Sort - O(n^2)


EXAMPLES:
  - insertionSort([10, 15, 20, 25, 30], 15) // 1
  - insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
  - insertionSort([100], 100) // 0

NOTE:

TESTS:
  - npm test insertionSort
  - npm test 05-sorting
  - npm test
--------- */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let selectedIndex = i - 1;
    while (selectedIndex >= 0 && arr[selectedIndex] > currentVal) {
      arr[selectedIndex + 1] = arr[selectedIndex];
      selectedIndex--;
    }
    arr[selectedIndex + 1] = currentVal;
  }
  return arr;
}

// // NOT SURE IF INSERTION SORT, SEEMS LIKE REVERSE BUBBLE SORT
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
//   return arr;
// }

module.exports = { insertionSort };

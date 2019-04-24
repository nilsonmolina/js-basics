/* ---------
Selection Sort - O(n^2)


EXAMPLES:
  - selectionSort([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
  - selectionSort([1, 2, 5, 3, 4]) // [1, 2, 3, 4, 5]
  - selectionSort([1, 2, 3, 2, 1]) // [1, 1, 2, 2, 3]

NOTE:

TESTS:
  - npm test selectionSort
  - npm test 05-sorting
  - npm test
--------- */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

// // SHORTER ES6 WAY OF SWAPPING
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) min = j;
//     }
//     if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
//   }

//   return arr;
// }


module.exports = { selectionSort };

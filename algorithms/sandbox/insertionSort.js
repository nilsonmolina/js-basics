function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j = i - 1;

    for (j; j >= 0 && currentValue < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

/* ----------
  NAIVE SOLUTION
---------- */
// function insertionSortNaive(arr) {
//   for (let head = 1; head < arr.length; head++) {
//     const currentValue = arr[head];
//     let tail = head - 1;

//     if (currentValue < arr[tail]) {
//       while (tail >= 0 && currentValue < arr[tail]) tail--;
//       arr.splice(head, 1);
//       arr.splice(tail + 1, 0, currentValue);
//     }
//   }
//   return arr;
// }


/* ----------
  TESTING
---------- */
console.log('Creating Arrays');
let start = Date.now();
const arr = new Array(100000).fill(0).map(() => Math.floor(Math.random() * 100));
// const arr2 = [...arr];
console.log(`  - ${Date.now() - start} ms`);

console.log('Running Optimized Insertion Sort');
start = Date.now();
insertionSort(arr);
console.log(`  - ${Date.now() - start} ms`);

// console.log('Running Naive Insertion Sort');
// start = Date.now();
// insertionSortNaive(arr2);
// console.log(`  - ${Date.now() - start} ms`);

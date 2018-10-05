/* ---------
  Write a funtion called maxSubarraySum which accepts an array of
  integers and a number called n. The function should calculate
  the maximum sum of n consecutive elements in the array.

  EXAMPLES
  maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
  maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
  maxSubarraySum([4,2,1,6], 1) // 6
  maxSubarraySum([], 4) // null
--------- */

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

console.log('[1,2,5,2,8,1,5], 2 :', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log('[1,2,5,2,8,1,5], 4 :', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log('[4,2,1,6], 1 :', maxSubarraySum([4, 2, 1, 6], 1));
console.log('[], 4 :', maxSubarraySum([], 4));
console.log('[1,1,1,2], 4 :', maxSubarraySum([1, 1, 1, 2], 4));


/*------------------------------
    TESTING PERFORMANCE
------------------------------*/
// const numbers = Array.from({ length: 400000 }, () => Math.floor(Math.random() * 10));

// const before1 = Date.now();
// maxSubarraySum(numbers, 7);
// const after1 = Date.now();

// const before2 = Date.now();
// maxSubarraySum2(numbers, 7);
// const after2 = Date.now();

// console.log('VERSION 1:', after1 - before1);
// console.log('VERSION 2:', after2 - before2);

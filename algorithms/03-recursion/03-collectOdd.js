/* ---------
  Write a function that returns all the odd values in a given array. Write
  both an iterative and recursive solution.
--------- */

function collectOddsIterative(arr) {
  const odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) odds.push(arr[i]);
  }

  return odds;
}

function collectOddsRecursiveHelper(arr) {
  const odds = [];
  function helper(partial) {
    if (partial.length === 0) return;
    if (partial[0] % 2 !== 0) odds.push(partial[0]);
    helper(partial.splice(1));
  }

  helper(arr);
  return odds;
}

function collectOddsRecursivePure(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddsRecursivePure(arr.splice(1)));
  return newArr;
}

/*------------------------------
    ALTERNATIVE USING IIFE
------------------------------*/
// function collectOddsRecursiveALT(arr) {
//   const odds = [];
//   (function helper(partial) {
//     if (partial.length === 0) return;
//     if (partial[0] % 2 !== 0) odds.push(partial[0]);
//     helper(partial.splice(1));
//   }(arr));

//   return odds;
// }

/*------------------------------
    Run Program
------------------------------*/
console.log(collectOddsIterative([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(collectOddsRecursiveHelper([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(collectOddsRecursivePure([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// module.exports = {
//   factorialIterative,
//   factorialRecursive,
// };

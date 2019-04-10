function getAllPermutations(arr) {
  let permutations = 1;
  for (let i = arr.length; i > 1; i--) {
    permutations *= i;
  }

  for (let i = 0; i < permutations; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (checkPermutation(arr)) return true;
      arr = [arr[0], arr[arr.length - 1], ...arr.slice(1, arr.length - 1)];
    }
    const popped = arr.pop();
    arr.unshift(popped);
  }

  return false;
}

function checkPermutation(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentFirst = arr[i][0];
    const previousLast = arr[i - 1][arr[i - 1].length - 1];
    if (currentFirst !== previousLast) return false;
  }
  return true;
}

console.log(getAllPermutations(['ab', 'bc', 'bb']));
// console.log(getAllPermutations(['ab', 'bb', 'bc']));
// console.log(getAllPermutations(['abb', 'bbb', 'bcc']));

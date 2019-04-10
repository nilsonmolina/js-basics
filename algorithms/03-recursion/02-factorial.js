/* ---------
  Write a function that returns the factorial of the given number. Write
  both an iterative and recursive solution.
--------- */

function factorialIterative(num) {
  let total = 1;
  while (num > 1) total *= num--;

  return total;
}

function factorialRecursive(num) {
  if (num <= 1) return 1;
  return num * factorialRecursive(num - 1);
}

/*------------------------------
    Run Program
------------------------------*/
console.log(factorialIterative(15));
console.log(factorialRecursive(15));

// module.exports = {
//   factorialIterative,
//   factorialRecursive,
// };

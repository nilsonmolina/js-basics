// ITERATIVE SOLUTION
function printNumVertical(n) {
  const digits = [];
  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    console.log(digits[i]);
  }
}


// RECURSIVE SOLUTION
function printNumRecursive(num) {
  if (Math.floor(num / 10) === 0) {
    console.log(num);
    return;
  }
  printNumRecursive(Math.floor(num / 10));
  console.log(num % 10);
}

module.exports = {
  printNumVertical,
  printNumRecursive,
};

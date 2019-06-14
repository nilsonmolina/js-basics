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

printNumVertical(12345);
// printNumVertical();

module.exports = { printNumVertical };

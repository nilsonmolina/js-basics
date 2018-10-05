/* ---------
  Write a function called sameFrequency. Given two positive integers,
  find out if the two numbers have the same frequency of digits.

  EXAMPLES
  sameFrequency(182, 281) // true
  sameFrequency(34, 14) // false
  sameFrequency(123456, 314265) // true
  sameFrequency(22, 2222) // false
--------- */

function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const lookup = {};
  for (const digit of str1) {
    lookup[digit] = (lookup[digit] || 0) + 1;
  }
  for (const digit of str2) {
    if (!lookup[digit]) return false;

    lookup[digit] -= 1;
  }
  return true;
}

console.log('182, 281: ', sameFrequency(182, 281));
console.log('34, 14: ', sameFrequency(34, 14));
console.log('123456, 314265: ', sameFrequency(123456, 314265));
console.log('22, 2222: ', sameFrequency(22, 2222));

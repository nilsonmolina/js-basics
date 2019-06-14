// function lateRide(n) {
//   const hours = Math.floor(n / 60);
//   const minutes = n % 60;
//   const addTwoDigits = num => Math.floor(num / 10) + (num % 10);

//   return addTwoDigits(hours) + addTwoDigits(minutes);
// }

// console.log(lateRide(240));

function gcd(a, b) {
  return a ? gcd(b % a, a) : b;
}

console.log([12345, 0].reduce(gcd));

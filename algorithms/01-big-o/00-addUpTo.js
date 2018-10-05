/* QUESTION: --------------------
    Write a function that calculates the sum of all numbers from 1 up to (and including) some
    number 'n'.
---------------------------------*/

// Solution 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let start = Date.now();
addUpTo(1000000000);
let end = Date.now();
console.log(`Solution 1: ${(end - start)} ms`);


// Solution 2
function addUpTo2(n) {
  return n * (n + 1) / 2;
}

start = Date.now();
addUpTo2(1000000000);
end = Date.now();
console.log(`Solution 2: ${(end - start)} ms`);

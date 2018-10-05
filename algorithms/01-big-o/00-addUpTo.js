/* QUESTION: --------------------
    Write a function that calculates the sum of all numbers from 1 up to (and including) some
    number 'n'.
---------------------------------*/

// Solution 1
function addUpToFirst(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

var start = performance.now();
addUpToFirst(1000000000);
var end = performance.now();
console.log(`Solution 1: ${(end - start)} ms`);


// Solution 2
function addUpToSecond(n) {
    return n * (n + 1) / 2;
}

start = performance.now();
addUpToSecond(1000000000);
end = performance.now();
console.log(`Solution 2: ${(end - start)} ms`);

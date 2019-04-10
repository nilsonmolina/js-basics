function evenDigitsOnly(n) {
  while (n > 0) {
    const digit = n % 10;
    if (digit % 2 !== 0) return false;
    n = Math.floor(n / 10);
  }
  return true;
}

function evenDigitsOnly1(n) {
  const s = n.toString();

  for (const digit of s) {
    const parsed = parseInt(digit, 10);
    if (parsed % 2 !== 0) return false;
  }

  return true;
}


function compareFuncs(first, second, input, iters = 10000) {
  console.log('Running Function 1...');
  let start = new Date();
  for (let i = 0; i < iters; i++) {
    first(input);
  }
  console.log(`------- RESULTS -------
  Iterations:   ${iters.toLocaleString('en')}
  Elapsed Time: ${new Date() - start} ms
  Average Time: ${(new Date() - start) / iters} ms
  `);

  console.log('Running Function 2...');
  start = new Date();
  for (let i = 0; i < iters; i++) {
    second(input);
  }
  console.log(`------- RESULTS -------
  Iterations:   ${iters.toLocaleString('en')}
  Elapsed Time: ${new Date() - start} ms
  Average Time: ${(new Date() - start) / iters} ms
  `);
}

// compareFuncs(evenDigitsOnly, evenDigitsOnly1, 24624802468, 10000000);
// compareFuncs(evenDigitsOnly, evenDigitsOnly1, 2462487, 10000000);
compareFuncs(evenDigitsOnly, evenDigitsOnly1, 246248, 10000000);

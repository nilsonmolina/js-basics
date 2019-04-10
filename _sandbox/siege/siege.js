const http = require('http');

const args = process.argv.slice(2);
const transactions = args[0] || 1000;
const elapsedStart = Date.now();
const results = {
  success: 0,
  failures: 0,
  time: 0,
};

siege();

process.on('exit', () => {
  console.log(`
Transactions:   ${results.success + results.failures} hits
Availability:   ${((results.success / transactions) * 100).toFixed(2)} %
Successful:     ${results.success}
Failed:         ${results.failures}
Average Time:   ${((results.time / transactions) / 1000).toFixed(3)} secs
Totaled Time:   ${(results.time / 1000).toFixed(3)} secs
Elapsed Time:   ${((Date.now() - elapsedStart) / 1000).toFixed(3)} secs
  `);
});

function attack(url) {
  const start = Date.now();
  http.get(url, (resp) => {
    results.time += Date.now() - start;
    const code = resp.statusCode.toString();
    if (code.startsWith('4') || code.startsWith('5')) {
      results.failures++;
      return;
    }
    results.success++;
  }).on('error', (err) => {
    console.log('err:', err);
    results.failures++;
  });
}

function siege() {
  for (let i = 0; i < transactions; i++) {
    attack('http://23.23.42.188');
  }
}

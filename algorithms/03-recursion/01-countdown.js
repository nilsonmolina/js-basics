/* ---------
  WRite a function that accepts a positive number and writes to console.log a
  countdown. When it hits zero, it will write 'all done!'. Write an iterative
  and a recursive function.
--------- */

function countdownIterative(num) {
  while (num > 0) console.log(num--);
  console.log('all done!');
}

function countdownRecursive(num) {
  if (num <= 0) {
    console.log('all done!');
    return;
  }
  console.log(num);
  countdownRecursive(--num);
}

/*------------------------------
    Run Program
------------------------------*/
countdownIterative(5);
countdownRecursive(5);

// module.exports = {
//   countdownIterative,
//   countdownRecursive,
// };

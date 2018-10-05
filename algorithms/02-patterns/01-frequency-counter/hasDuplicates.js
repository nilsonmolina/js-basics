/* ---------
  Implement a function called hasDuplicates which accepts a variable
  number of arguments, and checks whether there are any duplicates
  among the arguments passed in.

  EXAMPLES
  hasDuplicates(1, 2, 3) // false
  hasDuplicates(1, 2, 2) // true
  hasDuplicates('a', 'b', 'c', 'd') // false

  NOTE
  Assume all arguments are of the same type.
--------- */

function hasDuplicates(...args) {
  const lookup = {};

  for (const arg of args) {
    if (lookup[arg]) {
      return true;
    }
    lookup[arg] = 1;
  }
  return false;
}


console.log('1, 2, 3:', hasDuplicates(1, 2, 3));
console.log('1, 2, 2:', hasDuplicates(1, 2, 2));
console.log('"a", "b", "c", "d":', hasDuplicates('a', 'b', 'c', 'd'));
console.log('"a", "b", 1, 2:', hasDuplicates('a', 'b', 1, 2));

/*------------------------------
    ALTERNATIVE SOLUTIONS
------------------------------*/
// // COLT'S SOLUTION
// function hasDuplicates(...args) {
//   const collection = {};
//   for (const val of args) {
//     collection[args[val]] = (collection[args[val]] || 0) + 1;
//   }
//   for (const key in collection) {
//     if (collection[key] > 1) return true;
//   }
//   return false;
// }


// // PROBLEM: SHOULD NOT DETECT 1 & '1' AS DUPLICATE
// function hasDuplicates(...args) {
//   const lookup = {};

//   for (const arg of args) {
//     if (lookup[arg + typeof arg]) {
//       return true;
//     }
//     lookup[arg + typeof arg] = 1;
//   }
//   return false;
// }

// console.log('"a", "b", "1", 1:', hasDuplicates('a', 'b', '1', 1));
// console.log('1", 1, [1]:', hasDuplicates(1', 1, [1]));


// // USING 'Set' OBJECT
// function hasDuplicates(...args) {
//   return new Set(args).size !== args.length;
// }

// // F
/*------------------------------
    TESTING PERFORMANCE
------------------------------*/
// const numbers = Array.from({ length: 90000 }, () => Math.floor(Math.random() * 1000));

// const before1 = Date.now();
// const val1 = hasDuplicates(...numbers);
// const after1 = Date.now();

// const before2 = Date.now();
// const val2 = hasDuplicates2(...numbers);
// const after2 = Date.now();

// console.log(numbers);
// console.log('VERSION 1:', after1 - before1, val1);
// console.log('VERSION 2:', after2 - before2, val2);

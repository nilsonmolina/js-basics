/* ---------
  Write a function called isSubsequence which takes in two strings
  and checks whether the characters in the first string form a
  subsequence of the characters in the second string. In other
  words, the function should check whether the characters in the
  first string appear somewhere in the second string, without their
  order changing.

  EXAMPLES
  isSubsequence('hello', 'hello world') // true
  isSubsequence('sing', 'sting') // true
  isSubsequence('abc', 'abracadabra') // true
  isSubsequence('abc', 'acb') // false
--------- */

function isSubsequence(first, second) {
  let i = 0;
  for (let j = 0; j < second.length; j += 1) {
    if (first[i] === second[j]) {
      i += 1;
    }
    if (i === first.length) {
      return true;
    }
  }
  return false;
}

console.log('"hello", "hello world"', isSubsequence('hello', 'hello world'));
console.log('"sing", "sting"', isSubsequence('sing', 'sting'));
console.log('"abc", "abracadabra"', isSubsequence('abc', 'abracadabra'));
console.log('"abc", "acb"', isSubsequence('abc', 'acb'));
console.log('"", "acb"', isSubsequence('', 'acb'));

/*------------------------------
    ALTERNATIVE SOLUTIONS
------------------------------*/
// // COLT'S SOLUTION
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

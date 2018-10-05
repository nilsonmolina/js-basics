/* ---------
  Given two strings, write a function to determine if the second
  string is an anagram of the first. An anagram is a word, phrase,
  or name formed by rearranging the letters of another, such as
  cinema formed from iceman.

  EXAMPLES
  validAnagram('', '') // false
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram('rat', 'car') // false
  validAnagram('restful', 'fluster') // true
  validAnagram('hello', 'hello') // false

  NOTE
  You may assume the strings contain only lowercase letters.
--------- */

function validAnagram(first, second) {
  if (first.length !== second.length || first === second) {
    return false;
  }

  const lookup = {};
  for (const letter of first) {
    // lookup[letter] > 0 ? lookup[letter] += 1 : lookup[letter] = 1;
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (const letter of second) {
    if (!lookup[letter]) {
      return false;
    }
    lookup[letter] -= 1;
  }

  return true;
}

console.log('"", "":', validAnagram('', ''));
console.log('"aaz", "zza":', validAnagram('aaz', 'zza'));
console.log('"anagram", "nagaram":', validAnagram('anagram', 'nagaram'));
console.log('"rat", "car":', validAnagram('rat', 'car'));
console.log('"restful", "fluster":', validAnagram('restful', 'fluster'));
console.log('"abcd", "abc":', validAnagram('abcd', 'abc'));
console.log('"hello", "hello":', validAnagram('hello', 'hello'));

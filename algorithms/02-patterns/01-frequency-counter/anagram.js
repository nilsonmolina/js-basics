/* ---------
  Given two strings, write a function to determine if the second
  string is an anagram of the first. An anagram is a word, phrase,
  or name formed by rearranging the letters of another, such as
  cinema formed from iceman.

  EXAMPLES
  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram('rat', 'car') // false) // false
  validAnagram('awesome', 'awesom') // false
  validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
  validAnagram('qwerty', 'qeywrt') // true
  validAnagram('texttwisttime', 'timetwisttext') // true

  NOTE
    - You may assume the string contains only lowercase alphabets.
    - Two same strings can be considered anagrams

  Time Complexity
    - O(n)
--------- */

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};
  for (const letter of first) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (const letter of second) {
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }

  return true;
}

/*------------------------------
    ALTERNATIVE SOLUTIONS
------------------------------*/
function naiveAnagram(first, second) {
  const sortedFirst = first.split('').sort().join('');
  const sortedSecond = second.split('').sort().join('');

  return sortedFirst === sortedSecond;
}

function safeAnagram(first, second) {
  if (typeof first !== 'string' || typeof second !== 'string') return false;
  if (first.length !== second.length) return false;
  // if (first === second) return false; // if same is not allowed.

  const lookup = {};
  for (const letter of first) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (const letter of second) {
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }

  return true;
}

module.exports = {
  validAnagram,
  naiveAnagram,
  safeAnagram,
};

/* ---------
  Given two strings s1 and s2, return the longest common subsequence of
  s1 and s2 (with longest common subsequence defined as the longest sequence
  of characters such that all of them appear in both of the strings, possibly
  with other characters in between)

  GIVEN EXAMPLES
    'ABAZDC', 'BACBAD' => 'ABAD'
    'AGGTAB', 'GXTXAYB' => 'GTAB'
    'aaaa', 'aa' => 'aa'
  MY EDGE CASES
    '', 'abcd' => ''
    'ABBA', 'ABCABA' => 'ABBA'

  NOTE
    - Just try to solve it.

  Time Complexity
    - Just try to solve it.
--------- */

function longestSubsequence(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return '';
  let result = '';

  // for (let i = 0; i < s1.length; i++) {
  //   let temp = '';

  //   for (let j = i; j < s1.length; j++) {
  //     for (let k = 0; )
  //   }


  //   if (temp.length > result.length) result = temp;
  //   console.log(result);
  // }

  return result;
}

/*------------------------------
    ALTERNATIVE SOLUTIONS
------------------------------*/


module.exports = {
  longestSubsequence,
};

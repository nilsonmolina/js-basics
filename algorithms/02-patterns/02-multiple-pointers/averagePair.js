/* ---------
  Write a function called averagePair. Given a sorted array of
  integers and a target average, determine if there is a pair
  of values in the array where the average of the pair equals
  the target average. There may be more than one pair that
  matches the average target.

  EXAMPLES
  averagePair([1,2,3], 2.5) // true
  averagePair([1,3,3,5,6,7,10,12,19], 8) // true
  averagePair([-1,0,3,4,5,6], 4.1) // false
  averagePair([], 4) // false
--------- */

function averagePair(arr, targetAvg) {
  if (arr.length < 2) return false;

  let head = 0;
  let tail = arr.length - 1;
  while (head < tail) {
    const tempAvg = (arr[head] + arr[tail]) / 2;
    if (tempAvg > targetAvg) {
      tail -= 1;
    } else if (tempAvg < targetAvg) {
      head += 1;
    } else if (tempAvg === targetAvg) {
      return true;
    }
  }
  return false;
}

console.log('[1,2,3], 2.5: ', averagePair([1, 2, 3], 2.5));
console.log('[1,3,3,5,6,7,10,12,19], 8: ', averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log('[-1,0,3,4,5,6], 4.1: ', averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log('[], 4: ', averagePair([], 4));

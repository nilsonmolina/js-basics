const { validAnagram, naiveAnagram } = require('../anagram');

describe('validAnagram', () => {
  describe('naive solution', () => {
    it('should pass all of the instructors examples', () => {
      expect(naiveAnagram('', '')).toBe(true);
      expect(naiveAnagram('aaz', 'zza')).toBe(false);
      expect(naiveAnagram('anagram', 'nagaram')).toBe(true);
      expect(naiveAnagram('rat', 'car')).toBe(false);
      expect(naiveAnagram('awesome', 'awesom')).toBe(false);
      expect(naiveAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')).toBe(false);
      expect(naiveAnagram('qwerty', 'qeywrt')).toBe(true);
      expect(naiveAnagram('texttwisttime', 'timetwisttext')).toBe(true);
    });
  });

  describe('final solution', () => {
    it('should pass all of the instructors examples', () => {
      expect(validAnagram('', '')).toBe(true);
      expect(validAnagram('aaz', 'zza')).toBe(false);
      expect(validAnagram('anagram', 'nagaram')).toBe(true);
      expect(validAnagram('rat', 'car')).toBe(false);
      expect(validAnagram('awesome', 'awesom')).toBe(false);
      expect(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')).toBe(false);
      expect(validAnagram('qwerty', 'qeywrt')).toBe(true);
      expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
    });
  });
});

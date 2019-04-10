const {
  hasDuplicates,
  coltsHasDuplicates,
  setHasDuplicates,
} = require('../hasDuplicates');

describe('hasDuplicates', () => {
  describe('final solution', () => {
    it('should pass all of the instructors examples', () => {
      expect(hasDuplicates(1, 2, 3)).toBe(false);
      expect(hasDuplicates(1, 2, 2)).toBe(true);
      expect(hasDuplicates('a', 'b', 'c', 'd')).toBe(false);
    });
  });

  describe('professors solution', () => {
    it('should pass all of the instructors examples', () => {
      expect(coltsHasDuplicates(1, 2, 3)).toBe(false);
      expect(coltsHasDuplicates(1, 2, 2)).toBe(true);
      expect(coltsHasDuplicates('a', 'b', 'c', 'd')).toBe(false);
    });
  });

  describe('solution using Set', () => {
    it('should pass all of the instructors examples', () => {
      expect(setHasDuplicates(1, 2, 3)).toBe(false);
      expect(setHasDuplicates(1, 2, 2)).toBe(true);
      expect(setHasDuplicates('a', 'b', 'c', 'd')).toBe(false);
    });
  });
});

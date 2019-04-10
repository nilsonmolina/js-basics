const { countUnique, countUniqueWithSet } = require('../countUnique');

describe('Count Unique Values', () => {
  describe('optimized solution', () => {
    it('should pass all of the instructors examples', () => {
      expect(countUnique([1, 1, 1, 1, 1, 2])).toBe(2);
      expect(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
      expect(countUnique([])).toBe(0);
      expect(countUnique([-2, -1, -1, 0, 1])).toBe(4);
    });
  });

  describe('using Set', () => {
    it('should pass all of the instructors examples', () => {
      expect(countUniqueWithSet([1, 1, 1, 1, 1, 2])).toBe(2);
      expect(countUniqueWithSet([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
      expect(countUniqueWithSet([])).toBe(0);
      expect(countUniqueWithSet([-2, -1, -1, 0, 1])).toBe(4);
    });
  });
});

const { binarySearch } = require('../binarySearch');

describe('binarySearch', () => {
  it('must pass all of the instructors examples', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([
      5, 6, 10, 13, 14, 30, 34, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
    ], 10)).toBe(2);
    expect(binarySearch([
      5, 6, 10, 13, 14, 30, 34, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
    ], 95)).toBe(14);
    expect(binarySearch([
      5, 6, 10, 13, 14, 30, 34, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
    ], 100)).toBe(-1);
  });

  it('must pass my examples', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });
});

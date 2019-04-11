const { linearSearch } = require('../linearSearch');

describe('linearSearch', () => {
  it('must pass all of the instructors examples', () => {
    expect(linearSearch([10, 15, 20, 25, 30], 15)).toBe(1);
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toBe(5);
    expect(linearSearch([100], 100)).toBe(0);
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toBe(-1);
    expect(linearSearch([100], 200)).toBe(-1);
  });
});

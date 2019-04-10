const { productArray } = require('../productArray');

describe('productArray', () => {
  it('must pass all of instructors examples', () => {
    expect(productArray([1, 2, 3])).toBe(6);
    expect(productArray([1, 2, 3, 10])).toBe(60);
  });
});

const { recursiveRange } = require('../recursiveRange');

describe('recursiveRange', () => {
  it('must pass all of instructors examples', () => {
    expect(recursiveRange(6)).toBe(21);
    expect(recursiveRange(10)).toBe(55);
  });

  it('must pass all of my tests', () => {
    expect(recursiveRange(0)).toBe(0);
    expect(recursiveRange(-5)).toBe(0);
    expect(recursiveRange(1)).toBe(1);
  });
});

const { power } = require('../power');

describe('power', () => {
  it('should pass instructors examples', () => {
    expect(power(2, 0)).toBe(1);
    expect(power(2, 2)).toBe(4);
    expect(power(2, 4)).toBe(16);
  });

  it('should pass my examples', () => {
    expect(power(2, 1)).toBe(2);
    expect(power(1, 5000)).toBe(1);
  });
});

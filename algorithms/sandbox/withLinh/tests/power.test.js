const { power, linh } = require('../power');

describe('Must pass our arbitrary tests', () => {
  it('Should handle power of 1', () => {
    expect(power(5, 1)).toBe(5);

    expect(linh(5, 1)).toBe(5);
    expect(linh(5, 0)).toBe(1);
  });

  it('Should handle power greater than 1', () => {
    expect(power(5, 2)).toBe(25);
    expect(power(5, 3)).toBe(125);

    expect(linh(5, 2)).toBe(25);
    expect(linh(5, 3)).toBe(125);
  });
});

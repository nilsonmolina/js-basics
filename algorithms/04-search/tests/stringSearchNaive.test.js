const { stringSearchNaive } = require('../stringSearchNaive');

describe('Naive String Search', () => {
  it('must pass all of the instructors examples', () => {
    expect(stringSearchNaive('lorie loled', 'lol')).toBe(1);
    expect(stringSearchNaive('lorie loled', 'lo')).toBe(2);
    expect(stringSearchNaive('lorie loled', 'pop')).toBe(0);
  });
  // it('must pass all of the instructors examples', () => {
  //   expect(stringSearchNaive('lorie loled', 'lol')).toBe(1);
  //   expect(stringSearchNaive('lorie loled', 'lol')).toBe(1);
  // });
});

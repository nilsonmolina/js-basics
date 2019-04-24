const { bubbleSort } = require('../bubbleSort');

describe('Bubble Sort', () => {
  it('Must pass all of the instructors examples', () => {
    expect(bubbleSort([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
    expect(bubbleSort([37, 45, 29, 8, 12, 88, -3])).toEqual([-3, 8, 12, 29, 37, 45, 88]);
    expect(bubbleSort([2, 1, 9, 76, 4])).toEqual([1, 2, 4, 9, 76]);
  });

  it('Must pass all of my examples', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([1, 2, 5, 3, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([1, 2, 3, 2, 1])).toEqual([1, 1, 2, 2, 3]);
  });
});

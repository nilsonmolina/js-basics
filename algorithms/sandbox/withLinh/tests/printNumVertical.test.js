const { printNumVertical, printNumRecursive } = require('../printNumVertical');

describe('Print a number one digit at a time', () => {
  it('Iterative: Must pass given tests', () => {
    console.log = jest.fn();
    printNumVertical(12345);
    expect(console.log.mock.calls).toEqual([[1], [2], [3], [4], [5]]);

    console.log = jest.fn();
    printNumVertical(54321);
    expect(console.log.mock.calls).toEqual([[5], [4], [3], [2], [1]]);
  });

  it('Recursive: Must pass given tests', () => {
    console.log = jest.fn();
    printNumRecursive(12345);
    expect(console.log.mock.calls).toEqual([[1], [2], [3], [4], [5]]);

    console.log = jest.fn();
    printNumRecursive(54321);
    expect(console.log.mock.calls).toEqual([[5], [4], [3], [2], [1]]);
  });
});

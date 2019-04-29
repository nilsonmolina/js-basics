const { Stack } = require('../stack');

describe('Stack', () => {
  it('must initialize properly', () => {
    const stack = new Stack();
    expect(stack.size).toBe(0);
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
  });

  it('must push and pop properly', () => {
    const stack = new Stack();
    // POP AN EMPTY STACK
    expect(stack.pop()).toBeNull();
    expect(stack.size).toBe(0);
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();

    // PUSH VALUES
    expect(stack.push(13)).toBe(1);
    expect(stack.toArray()).toEqual([13]);
    expect(stack.first.value).toBe(13);
    expect(stack.last.value).toBe(13);
    expect(stack.size).toBe(1);

    expect(stack.push(27)).toBe(2);
    expect(stack.toArray()).toEqual([27, 13]);
    expect(stack.first.value).toBe(27);
    expect(stack.last.value).toBe(13);
    expect(stack.size).toBe(2);

    // PUSH DIFFERENT TYPE
    expect(stack.push('hello')).toBe(3);
    expect(stack.toArray()).toEqual(['hello', 27, 13]);
    expect(stack.first.value).toBe('hello');
    expect(stack.last.value).toBe(13);
    expect(stack.size).toBe(3);

    // POP ALL VALUES
    expect(stack.pop()).toBe('hello');
    expect(stack.toArray()).toEqual([27, 13]);
    expect(stack.first.value).toBe(27);
    expect(stack.last.value).toBe(13);
    expect(stack.size).toBe(2);

    expect(stack.pop()).toBe(27);
    expect(stack.toArray()).toEqual([13]);
    expect(stack.first.value).toBe(13);
    expect(stack.last.value).toBe(13);
    expect(stack.size).toBe(1);

    expect(stack.pop()).toBe(13);
    expect(stack.toArray()).toEqual([]);
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
    expect(stack.size).toBe(0);

    expect(stack.pop()).toBeNull();
    expect(stack.size).toBe(0);
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();

    // PUSH ANOTHER VALUE
    expect(stack.push(13)).toBe(1);
    expect(stack.toArray()).toEqual([13]);
    expect(stack.first.value).toBe(13);
    expect(stack.last.value).toBe(13);
    expect(stack.size).toBe(1);
  });
});

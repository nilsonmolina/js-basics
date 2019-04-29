const { Queue } = require('../queue');

describe('Queue', () => {
  it('must initialize properly', () => {
    const queue = new Queue();
    expect(queue.size).toBe(0);
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
  });

  it('must enqueue and dequeue properly', () => {
    const queue = new Queue();
    // DEQUEUE AN EMPTY STACK
    expect(queue.dequeue()).toBeNull();
    expect(queue.size).toBe(0);
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();

    // ENQUEUE VALUES
    expect(queue.enqueue(13)).toBe(1);
    expect(queue.toArray()).toEqual([13]);
    expect(queue.first.value).toBe(13);
    expect(queue.last.value).toBe(13);
    expect(queue.size).toBe(1);

    expect(queue.enqueue(27)).toBe(2);
    expect(queue.toArray()).toEqual([13, 27]);
    expect(queue.first.value).toBe(13);
    expect(queue.last.value).toBe(27);
    expect(queue.size).toBe(2);

    // ENQUEUE DIFFERENT TYPE
    expect(queue.enqueue('hello')).toBe(3);
    expect(queue.toArray()).toEqual([13, 27, 'hello']);
    expect(queue.first.value).toBe(13);
    expect(queue.last.value).toBe('hello');
    expect(queue.size).toBe(3);

    // DEQUEUE ALL VALUES
    expect(queue.dequeue()).toBe(13);
    expect(queue.toArray()).toEqual([27, 'hello']);
    expect(queue.first.value).toBe(27);
    expect(queue.last.value).toBe('hello');
    expect(queue.size).toBe(2);

    expect(queue.dequeue()).toBe(27);
    expect(queue.toArray()).toEqual(['hello']);
    expect(queue.first.value).toBe('hello');
    expect(queue.last.value).toBe('hello');
    expect(queue.size).toBe(1);

    expect(queue.dequeue()).toBe('hello');
    expect(queue.toArray()).toEqual([]);
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.size).toBe(0);

    expect(queue.dequeue()).toBeNull();
    expect(queue.size).toBe(0);
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();

    // ENQUEUE ANOTHER VALUE
    expect(queue.enqueue(13)).toBe(1);
    expect(queue.toArray()).toEqual([13]);
    expect(queue.first.value).toBe(13);
    expect(queue.last.value).toBe(13);
    expect(queue.size).toBe(1);
  });
});

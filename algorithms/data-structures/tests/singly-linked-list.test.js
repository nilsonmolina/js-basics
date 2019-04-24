const { SinglyLinkedList } = require('../singly-linked-list');

describe('Singly Linked List', () => {
  it('must initialize properly', () => {
    const list = new SinglyLinkedList();
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('must push and pop properly', () => {
    const list = new SinglyLinkedList();
    // POP AN EMPTY LINKED LIST
    expect(list.pop()).toBeUndefined();
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    // PUSH VALUES
    expect(list.push(13).head.val).toBe(13);
    expect(list.toArray()).toEqual([13]);
    expect(list.head.val).toBe(13);
    expect(list.tail.val).toBe(13);
    expect(list.length).toBe(1);

    expect(list.push(27).head.val).toBe(13);
    expect(list.toArray()).toEqual([13, 27]);
    expect(list.head.val).toBe(13);
    expect(list.tail.val).toBe(27);
    expect(list.length).toBe(2);

    // PUSH DIFFERENT TYPE
    expect(list.push('hello').head.val).toBe(13);
    expect(list.toArray()).toEqual([13, 27, 'hello']);
    expect(list.head.val).toBe(13);
    expect(list.tail.val).toBe('hello');
    expect(list.length).toBe(3);

    // POP ALL VALUES
    expect(list.pop().val).toBe('hello');
    expect(list.toArray()).toEqual([13, 27]);
    expect(list.head.val).toBe(13);
    expect(list.tail.val).toBe(27);
    expect(list.length).toBe(2);

    expect(list.pop().val).toBe(27);
    expect(list.toArray()).toEqual([13]);
    expect(list.head.val).toBe(13);
    expect(list.tail.val).toBe(13);
    expect(list.length).toBe(1);

    expect(list.pop().val).toBe(13);
    expect(list.toArray()).toEqual([]);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);

    expect(list.pop()).toBeUndefined();
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    // PUSH ANOTHER VALUE
    expect(list.push(13).head.val).toBe(13);
    expect(list.toArray()).toEqual([13]);
    expect(list.head.val).toBe(13);
    expect(list.tail.val).toBe(13);
    expect(list.length).toBe(1);
  });

  it('must shift and unshift properly', () => {
    const list = new SinglyLinkedList();
    // SHIFT AN EMPTY LINKED LIST
    expect(list.shift()).toBeUndefined();
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    // UNSHIFT VALUES
    expect(list.unshift(13).head.val).toBe(13);
    expect(list.toArray()).toEqual([13]);
    expect(list.head.val).toBe(13);
    expect(list.tail.val).toBe(13);
    expect(list.length).toBe(1);

    expect(list.unshift(27).head.val).toBe(27);
    expect(list.toArray()).toEqual([27, 13]);
    expect(list.head.val).toBe(27);
    expect(list.tail.val).toBe(13);
    expect(list.length).toBe(2);

    // UNSHIFT DIFFERENT TYPE
    expect(list.unshift('hello').head.val).toBe('hello');
    expect(list.toArray()).toEqual(['hello', 27, 13]);
    expect(list.head.val).toBe('hello');
    expect(list.tail.val).toBe(13);
    expect(list.length).toBe(3);

    expect(list.shift().val).toBe('hello');
    expect(list.toArray()).toEqual([27, 13]);
    expect(list.head.val).toBe(27);
    expect(list.tail.val).toBe(13);
    expect(list.length).toBe(2);

    // SHIFT ALL VALUES
    expect(list.shift().val).toBe(27);
    expect(list.toArray()).toEqual([13]);
    expect(list.head.val).toBe(13);
    expect(list.tail.val).toBe(13);
    expect(list.length).toBe(1);

    expect(list.shift().val).toBe(13);
    expect(list.toArray()).toEqual([]);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);

    expect(list.shift()).toBeUndefined();
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    // UNSHIFT ANOTHER VALUE
    expect(list.unshift(13).head.val).toBe(13);
    expect(list.toArray()).toEqual([13]);
    expect(list.head.val).toBe(13);
    expect(list.tail.val).toBe(13);
    expect(list.length).toBe(1);
  });

  it('must get and set properly', () => {
    const list = new SinglyLinkedList();
    // GET FROM EMPTY LINKED LIST
    expect(list.get()).toBeNull();
    expect(list.get(0)).toBeNull();

    // PUSH DATA FOR TESTING
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);

    // GET VALUES
    expect(list.get().val).toBe(1);
    expect(list.get(0).val).toBe(1);
    expect(list.get(2).val).toBe(3);
    expect(list.get(4).val).toBe(5);
    expect(list.get(1).val).toBe(2);
    expect(list.get(3).val).toBe(4);
    expect(list.get(5).val).toBe(6);

    // GET OUT OF RANGE VALUES
    expect(list.get(6)).toBeNull();
    expect(list.get(-1)).toBeNull();

    // SET VALUES
    expect(list.set(0, 10)).toBe(true);
    expect(list.set(2, 12)).toBe(true);
    expect(list.set(4, 14)).toBe(true);
    expect(list.set(1, 11)).toBe(true);
    expect(list.set(3, 13)).toBe(true);
    expect(list.set(5, 15)).toBe(true);

    // GET VALUES TO CONFIRM SET
    expect(list.get().val).toBe(10);
    expect(list.get(0).val).toBe(10);
    expect(list.get(2).val).toBe(12);
    expect(list.get(4).val).toBe(14);
    expect(list.get(1).val).toBe(11);
    expect(list.get(3).val).toBe(13);
    expect(list.get(5).val).toBe(15);

    // SET OUT OF RANGE VALUES
    expect(list.set(6)).toBe(false);
    expect(list.set(-1)).toBe(false);
  });

  it('must insert and remove properly', () => {
    const list = new SinglyLinkedList();
    // REMOVE FROM EMPTY LIST
    expect(list.remove()).toBeUndefined();
    expect(list.remove(0)).toBeUndefined();

    // INSERT INTO EMPTY LIST
    expect(list.insert(0, 1)).toBe(true);
    expect(list.toArray()).toEqual([1]);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(1);
    expect(list.length).toBe(1);
    // INSERT TO FRONT, LIKE UNSHIFT
    expect(list.insert(0, 2)).toBe(true);
    expect(list.toArray()).toEqual([2, 1]);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(1);
    expect(list.length).toBe(2);
    // INSERT TO END, LIKE PUSH
    expect(list.insert(2, 3)).toBe(true);
    expect(list.toArray()).toEqual([2, 1, 3]);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(3);
    expect(list.length).toBe(3);
    // INSERT INTO MIDDLE
    expect(list.insert(1, 4)).toBe(true);
    expect(list.toArray()).toEqual([2, 4, 1, 3]);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(3);
    expect(list.length).toBe(4);

    expect(list.insert(2, 5)).toBe(true);
    expect(list.toArray()).toEqual([2, 4, 5, 1, 3]);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(3);
    expect(list.length).toBe(5);
    // INSERT OUT OF RANGE
    expect(list.insert(6, 13)).toBe(false);
    expect(list.insert(-1, 13)).toBe(false);
    expect(list.toArray()).toEqual([2, 4, 5, 1, 3]);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(3);
    expect(list.length).toBe(5);

    // REMOVE OUT OF RANGE
    expect(list.remove(5)).toBeUndefined();
    expect(list.remove(-1)).toBeUndefined();
    // REMOVE FROM FRONT
    expect(list.remove(0).val).toBe(2);
    expect(list.toArray()).toEqual([4, 5, 1, 3]);
    expect(list.head.val).toBe(4);
    expect(list.tail.val).toBe(3);
    expect(list.length).toBe(4);
    // REMOVE FROM END
    expect(list.remove(3).val).toBe(3);
    expect(list.toArray()).toEqual([4, 5, 1]);
    expect(list.head.val).toBe(4);
    expect(list.tail.val).toBe(1);
    expect(list.length).toBe(3);
    // REMOVE FROM MIDDLE
    expect(list.remove(1).val).toBe(5);
    expect(list.toArray()).toEqual([4, 1]);
    expect(list.head.val).toBe(4);
    expect(list.tail.val).toBe(1);
    expect(list.length).toBe(2);
    // REMOVE UNTIL EMPTY
    expect(list.remove(1).val).toBe(1);
    expect(list.toArray()).toEqual([4]);
    expect(list.head.val).toBe(4);
    expect(list.tail.val).toBe(4);
    expect(list.length).toBe(1);
    // REMOVE UNTIL EMPTY
    expect(list.remove(0).val).toBe(4);
    expect(list.toArray()).toEqual([]);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  it('must reverse linked list properly', () => {
    const list = new SinglyLinkedList();
    // REVERSE AN EMPTY LIST
    expect(list.reverse().head).toBe(null);
    expect(list.reverse().tail).toBe(null);
    expect(list.reverse().length).toBe(0);

    // LIST WITH ONE ITEM SHOULD REMAIN UNCHANGED
    list.push(1);
    expect(list.reverse().head.val).toBe(1);
    expect(list.reverse().tail.val).toBe(1);
    expect(list.reverse().length).toBe(1);

    // LIST WITH TWO ITEMS SHOULD PROPERLY REVERSE
    list.push(2);
    list.reverse();
    expect(list.toArray()).toEqual([2, 1]);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(1);
    expect(list.length).toBe(2);

    list.reverse();
    expect(list.toArray()).toEqual([1, 2]);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(2);
    expect(list.length).toBe(2);

    // LIST WITH MANY ITEMS SHOULD REVERSE
    list.push(3);
    list.push(4);
    list.push(5);
    list.push(6);
    list.push(7);
    list.push(8);
    list.push(9);

    list.reverse();
    expect(list.toArray()).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(list.head.val).toBe(9);
    expect(list.tail.val).toBe(1);
    expect(list.length).toBe(9);
  });
});

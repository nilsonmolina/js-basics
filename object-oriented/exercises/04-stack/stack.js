const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  peek() {
    const items = _items.get(this);

    if (items.length < 1) throw new Error('Stack is empty.');
    return items[items.length - 1];
  }

  pop() {
    const items = _items.get(this);

    if (items.length < 1) throw new Error('Stack is empty.');
    return items.pop();
  }

  push(obj) {
    _items.get(this).push(obj);
  }

  get count() {
    return _items.get(this).length;
  }
}

const s = new Stack();
console.log(s);

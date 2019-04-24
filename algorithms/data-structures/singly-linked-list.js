class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }

    let curr = this.head;
    while (curr.next !== this.tail) {
      curr = curr.next;
    }
    const temp = curr.next;
    curr.next = null;
    this.tail = curr;
    this.length--;
    return temp;
  }

  shift() {
    if (this.length < 1) return undefined;
    const curr = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return curr;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (this.head) newHead.next = this.head;
    else this.tail = newHead;
    this.head = newHead;
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let curr = this.head;

    while (index--) {
      curr = curr.next;
    }

    return curr;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === 0) this.unshift(val);
    else if (index === this.length) this.push(val);
    else {
      const prev = this.get(index - 1);
      const newNode = new Node(val);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
    }

    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    if (index === 0 || index === undefined) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = prev.next.next;
    this.length--;

    return temp;
  }

  reverse() {
    if (this.length < 2) return this;

    let prev = null;
    let curr = this.head;
    this.tail = curr;
    while (curr) {
      const temp = curr;
      curr = curr.next;
      temp.next = prev;
      prev = temp;
    }
    this.head = prev;

    return this;
  }

  // ---------- HELPER FUNCTIONS FOR TESTING AND DEBUGGING ----------
  traverse() {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }

  toArray() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return (arr);
  }
}

module.exports = { Node, SinglyLinkedList };

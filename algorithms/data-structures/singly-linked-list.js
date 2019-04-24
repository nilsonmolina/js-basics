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
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }

    let curr = this.head;
    while (curr.next !== this.tail) {
      curr = curr.next;
    }
    curr.next = null;
    this.tail = curr;
    this.length--;
    return this;
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
    if (index === 0) this.shift();
    else if (index === this.length - 1) this.pop();
    else {
      const prev = this.get(index - 1);
      prev.next = prev.next.next;
      this.length--;
    }
    return this;
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

  traverse() {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }

  print() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}

// const first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

const list = new SinglyLinkedList();
list.push('hi');
list.push('there,');
list.push('how');
list.push('are');
list.push('you');

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;
    while (val !== curr.value) {
      if (val < curr.value) {
        if (curr.left === null) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else if (val > curr.value) {
        if (curr.right === null) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
    return undefined;
  }

  find(val) {
    let curr = this.root;
    while (curr && val !== undefined) {
      if (val < curr.value) curr = curr.left;
      else if (val > curr.value) curr = curr.right;
      else if (val === curr.value) return curr;
      else break;
    }

    return null;
  }

  contains(val) {
    let curr = this.root;
    while (curr && val !== undefined) {
      if (val < curr.value) curr = curr.left;
      else if (val > curr.value) curr = curr.right;
      else if (val === curr.value) return true;
      else break;
    }

    return false;
  }

  breadthFirstTraversal() {
    if (!this.root) return null;
    const queue = [];
    const values = [];
    let curr = this.root;

    queue.push(curr);
    while (queue.length) {
      curr = queue.shift();
      values.push(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    return values;
  }

  breadthFirstSearch(val) {
    if (!this.root || val === undefined) return null;
    const queue = [];
    let curr = this.root;

    queue.push(curr);
    while (queue.length) {
      curr = queue.shift();
      if (curr.value === val) return curr;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    return null;
  }
}

module.exports = { BinarySearchTree };

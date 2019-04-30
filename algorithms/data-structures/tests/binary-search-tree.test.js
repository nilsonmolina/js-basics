const { BinarySearchTree } = require('../binary-search-tree');

describe('Binary Search Tree', () => {
  it('must initialize properly', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });

  it('must insert properly', () => {
    const tree = new BinarySearchTree();
    // INSERT INTO EMPTY TREE
    expect(tree.insert(13).root.value).toBe(13);
    expect(tree.root.value).toBe(13);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
    // INSERT SMALLER THAN ROOT
    expect(tree.insert(5).root.value).toBe(13);
    expect(tree.root.value).toBe(13);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.left.left).toBeNull();
    expect(tree.root.left.right).toBeNull();
    expect(tree.root.right).toBeNull();
    // INSERT SMALLER THAN ROOT, LARGER THAN LEFT
    expect(tree.insert(10).root.value).toBe(13);
    expect(tree.root.value).toBe(13);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.left.left).toBeNull();
    expect(tree.root.left.right.value).toBe(10);
    expect(tree.root.right).toBeNull();
    // INSERT LARGER THAN ROOT
    expect(tree.insert(15).root.value).toBe(13);
    expect(tree.root.value).toBe(13);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.left.left).toBeNull();
    expect(tree.root.left.right.value).toBe(10);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.right.left).toBeNull();
    expect(tree.root.right.right).toBeNull();
    // INSERT LARGER THAN ROOT, LARGER THAN RIGHT
    expect(tree.insert(20).root.value).toBe(13);
    expect(tree.root.value).toBe(13);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.left.left).toBeNull();
    expect(tree.root.left.right.value).toBe(10);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.right.left).toBeNull();
    expect(tree.root.right.right.value).toBe(20);
    // INSERT LARGER THAN ROOT, SMALLER THAN RIGHT
    expect(tree.insert(14).root.value).toBe(13);
    expect(tree.root.value).toBe(13);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.left.left).toBeNull();
    expect(tree.root.left.right.value).toBe(10);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.right.left.value).toBe(14);
    expect(tree.root.right.right.value).toBe(20);
    // INSERT SMALLER THAN ROOT, SMALLER THAN LEFT
    expect(tree.insert(0).root.value).toBe(13);
    expect(tree.root.value).toBe(13);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.left.left.value).toBe(0);
    expect(tree.root.left.right.value).toBe(10);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.right.left.value).toBe(14);
    expect(tree.root.right.right.value).toBe(20);

    // INSERT ALREADY EXISTING VALUE
    expect(tree.insert(0)).toBeUndefined();
    expect(tree.insert(5)).toBeUndefined();
    expect(tree.insert(10)).toBeUndefined();
    expect(tree.insert(13)).toBeUndefined();
    expect(tree.insert(14)).toBeUndefined();
    expect(tree.insert(15)).toBeUndefined();
    expect(tree.insert(20)).toBeUndefined();

    // INSERT TO A THIRD LAYER - LESS THAN ROOT -> LEFT -> LEFT
    expect(tree.insert(-5).root.value).toBe(13);
    expect(tree.root.value).toBe(13);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
    expect(tree.root.left.left.value).toBe(0);
    expect(tree.root.left.right.value).toBe(10);
    expect(tree.root.right.left.value).toBe(14);
    expect(tree.root.right.right.value).toBe(20);
    expect(tree.root.right.right.value).toBe(20);
    expect(tree.root.left.left.left.value).toBe(-5);
    expect(tree.root.left.left.right).toBeNull();
  });

  it('must run contains properly', () => {
    const tree = new BinarySearchTree();
    // CONTAINS WHEN TREE IS EMPTY
    expect(tree.contains()).toBe(false);
    expect(tree.contains(13)).toBe(false);

    // INSERT TEST DATA
    tree.insert(13);
    tree.insert(0);
    tree.insert(5);
    tree.insert(10);
    tree.insert(15);
    tree.insert(20);
    tree.insert(25);
    // EMPTY CONTAINS
    expect(tree.contains()).toBe(false);

    // CONTAINS - TRUE
    expect(tree.contains(25)).toBe(true);
    expect(tree.contains(20)).toBe(true);
    expect(tree.contains(15)).toBe(true);
    expect(tree.contains(10)).toBe(true);
    expect(tree.contains(5)).toBe(true);
    expect(tree.contains(0)).toBe(true);
    expect(tree.contains(13)).toBe(true);

    // CONTAINS - FALSE
    expect(tree.contains(-5)).toBe(false);
    expect(tree.contains('hi')).toBe(false);
    expect(tree.contains(100)).toBe(false);
  });

  it('must run find properly', () => {
    const tree = new BinarySearchTree();
    // FIND WHEN TREE IS EMPTY
    expect(tree.find()).toBeNull();
    expect(tree.find(13)).toBeNull();

    // INSERT TEST DATA
    tree.insert(13);
    tree.insert(0);
    tree.insert(5);
    tree.insert(10);
    tree.insert(15);
    tree.insert(20);
    tree.insert(25);
    // EMPTY FIND
    expect(tree.find()).toBeNull();

    // FIND - TRUE
    expect(tree.find(25).value).toBe(25);
    expect(tree.find(20).value).toBe(20);
    expect(tree.find(15).value).toBe(15);
    expect(tree.find(10).value).toBe(10);
    expect(tree.find(5).value).toBe(5);
    expect(tree.find(0).value).toBe(0);
    expect(tree.find(13).value).toBe(13);

    // FIND - FALSE
    expect(tree.find()).toBeNull();
    expect(tree.find(-5)).toBeNull();
    expect(tree.find('hi')).toBeNull();
    expect(tree.find(100)).toBeNull();
  });

  it('must run Breadth First Search (BFS) properly', () => {
    const tree = new BinarySearchTree();

    // TRAVERSE WHEN TREE IS EMPTY
    expect(tree.breadthFirstTraversal()).toBeNull();
    // SEARCH WHEN TREE IS EMPTY
    expect(tree.breadthFirstSearch(13)).toBeNull();

    // INSERT TEST DATA
    // -------------------- //
    //         10           //
    //      6       15      //
    //    0   8   13  20    //
    // -1               27  //
    // -------------------- //
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(0);
    tree.insert(8);
    tree.insert(13);
    tree.insert(20);
    tree.insert(27);
    tree.insert(-1);

    // TRAVERSE THE TREE
    expect(tree.breadthFirstTraversal()).toEqual([10, 6, 15, 0, 8, 13, 20, -1, 27]);

    // SEARCH FOR EXISTING VALUES
    expect(tree.breadthFirstSearch(10).value).toBe(10);
    expect(tree.breadthFirstSearch(6).value).toBe(6);
    expect(tree.breadthFirstSearch(15).value).toBe(15);
    expect(tree.breadthFirstSearch(0).value).toBe(0);
    expect(tree.breadthFirstSearch(8).value).toBe(8);
    expect(tree.breadthFirstSearch(20).value).toBe(20);

    // SEARCH FOR VALUES THAT DO NOT EXIST
    expect(tree.breadthFirstSearch(1)).toBeNull();
    expect(tree.breadthFirstSearch(2)).toBeNull();
    expect(tree.breadthFirstSearch(100)).toBeNull();
  });

  it('must run Depth First Search (DFS) properly', () => {
    const tree = new BinarySearchTree();

    // TRAVERSE WHEN TREE IS EMPTY
    expect(tree.depthFirstSearchPreOrder()).toEqual([]);
    expect(tree.depthFirstSearchPostOrder()).toEqual([]);
    expect(tree.depthFirstSearchInOrder()).toEqual([]);

    // INSERT TEST DATA
    // -------------------- //
    //          10          //
    //      6       15      //
    //    0   8   13  20    //
    // -1               27  //
    // -------------------- //
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(0);
    tree.insert(8);
    tree.insert(13);
    tree.insert(20);
    tree.insert(27);
    tree.insert(-1);

    // TRAVERSE THE TREE
    expect(tree.depthFirstSearchPreOrder()).toEqual([10, 6, 0, -1, 8, 15, 13, 20, 27]);
    expect(tree.depthFirstSearchPostOrder()).toEqual([-1, 0, 8, 6, 13, 27, 20, 15, 10]);
    expect(tree.depthFirstSearchInOrder()).toEqual([-1, 0, 6, 8, 10, 13, 15, 20, 27]);
  });
});

describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should traverse array in order', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.inOrderTraverse()).to.eql([2, 3, 5]);
  });

  it('should remove a leaf node', function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(4);
    binarySearchTree.insert(15);
    binarySearchTree.remove(15);
    expect(binarySearchTree.contains(15)).to.equal(false);
  });

  it('should keep track of the bst size', function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(4);
    binarySearchTree.insert(15);
    binarySearchTree.remove(15);
    expect(binarySearchTree.size).to.equal(3);
  });

  it('should return nodes is a breadth first order', function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(4);
    binarySearchTree.insert(15);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.breadthFirstLog()).to.eql([5, 4, 10, 2, 15, 3]);
  });

  it('should return a correct tree height', function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(11);
    binarySearchTree.insert(12);
    binarySearchTree.insert(13);
    binarySearchTree.insert(14);
    expect(binarySearchTree.getHeight(binarySearchTree)).to.eql(5);
  });
});

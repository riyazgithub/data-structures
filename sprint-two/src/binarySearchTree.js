var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value){
  if(this === undefined){
    return new BinarySearchTree(value)
  }
  if(this.value > value){
    this.left = insert(this.left);
  } else {
    this.right = insert(this.right);
  }
};

BinarySearchTree.prototype.contains = function(value){

};

BinarySearchTree.prototype.depthFirstLog = function(cb){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

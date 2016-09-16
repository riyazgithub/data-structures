var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.inserthlpr = function(value, node){
  /*if(node === null){
    return new BinarySearchTree(value)
  }
    if(node.value > value){
    node.left = node.inserthlpr(value, node.left);
  } else {
    node.right = node.inserthlpr(value, node.right);
  }*/
  if(node.value > value) {
    if(node.left === null) {
      node.left = new BinarySearchTree(value);
    } else {
      this.inserthlpr(value,node.left);
    }

  } else {
    if(node.right === null) {
      node.right = new BinarySearchTree(value);
    } else {
      this.inserthlpr(value,node.right);
    }
  }

};

BinarySearchTree.prototype.insert = function(value) {
  this.inserthlpr(value,this);
  //debugger;
};

BinarySearchTree.prototype.containshlpr = function(value, node){
  var result = false;
  if(node === null){
    return false;
  }
  if(node.value > value){
    result = result || this.containshlpr(value, node.left);
  } else if(node.value < value) {
    result = result || this.containshlpr(value, node.right);
  } else if(node.value === value){
    return true;
  }
  return result;
};

BinarySearchTree.prototype.contains = function(value){
  return this.containshlpr(value, this);
}

BinarySearchTree.prototype.depthFirstLog = function(cb){
  this.depthFirstLoghlpr(cb, this);
};

BinarySearchTree.prototype.depthFirstLoghlpr = function(cb, node){
  if(node === null){
    return;
  }
  cb(node.value); 
  this.depthFirstLoghlpr(cb, node.left);
  this.depthFirstLoghlpr(cb, node.right);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

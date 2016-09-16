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
};

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

BinarySearchTree.prototype.remove = function(value, node) {
  if (this.contains(value, this)) {
    node = node === undefined ? this : node;
    if (node.left && node.value > value) {
      if (node.left.value === value) {
        node.left = null;
      } else {
        this.remove(value, node.left);
      }
    } else if (node.right && node.value < value) {
      if (node.right.value === value) {
        node.right = null;
      } else {
        this.remove(value, node.right);
      }    
    }
  }
};

BinarySearchTree.prototype.removeHelper = function(value, node) {
  if(node.left && node.value > value) {
    if(node.left.value === value) {
      node.left = null;
    } else {
      this.removeHelper(value,node.left);
    }
  } else if (node.right && node.value < value) {
    if(node.right.value === value) {
      node.right = null;
    } else {
      this.removeHelper(value,node.right);
    }    
  }
  
};

BinarySearchTree.prototype.printTree = function(node){
  var array = [];
  var func = function(value) { array.push(value); };
  this.depthFirstLog(func);
  console.log(array);
};

BinarySearchTree.prototype.breadthFirstLog = function(){
  var q = new Queue();
  var result = [];
  q.enqueue(this);

  while (q.size() > 0) {
    var node = q.dequeue();
    result.push(node.value);
    if(node.left !== null){
      q.enqueue(node.left);
    }
    if(node.right !== null){
      q.enqueue(node.right);
    }
  }
  return result;
};



// Queue Class

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 0;
  this.rear = 0;
};


Queue.prototype.enqueue = function(value){
  this.storage[this.rear] = value;
  this.rear++;
};

Queue.prototype.dequeue = function(){
  var ret;
  if(this.front < this.rear){
    ret = this.storage[this.front];
    this.front++;
  }
  return ret;
};

Queue.prototype.size = function(){
  return this.rear - this.front;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

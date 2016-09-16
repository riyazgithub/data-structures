var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var treeNode = new Tree(value);
  this.children.push(treeNode);
};

treeMethods.contains = function(target, node) {
  node = node || this;
  var result = false;
  for (var child = 0; child < node.children.length; child++) {
    result = result || node.contains(target, node.children[child]);
  }
  if (node.value === target) {
    return true;
  }
  return result;
};

treeMethods.getParent = function(child, node) {
  node = node || this;
  var result = null;
  for(var i =0 ; i< node.children.length; i++) {
    if(node.children[i].value === child) {
      result = node;
    } else {
      result = result ? result : node.getParent(child,node.children[i]);
    }
  }
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

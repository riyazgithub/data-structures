var Trie = function(value) {
  this.children = {};
  this.value = value;

};

Trie.prototype.addWord = function(word, node, index) {
  node = node || this;
  index = index || 0;
  // debugger;
  if (index < word.length) {    
    var currentNode = this.contains(word.substring(0, index + 1), node);
    if (currentNode === undefined) {
      // debugger;
      node.children[word.substring(0, index + 1)] = new Trie(word.substring(0, index + 1));
      var childNode = node.children[word.substring(0, index + 1)];
      this.addWord(word, childNode, index + 1);
    } else {
      node = currentNode;
      this.addWord(word, currentNode, index + 1);
    }

  }
};

Trie.prototype.contains = function (prefix, node) {
  node = node || this;
  var ret = true;
  for (var i = 0; i < prefix.length; i++) {
    var child = node.children[prefix];
    if (child) {
      node = child;
    } else {
      node = undefined;
      break;
    }

    return node;
  }
};

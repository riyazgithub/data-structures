var Trie = function(){
  this._storage = {};
};

var trieNode = function(value){
  this.value = value;
  this.edges = {};
};

Trie.prototype.addWord = function(word) {

};
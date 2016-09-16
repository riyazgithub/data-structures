

var HashTable = function HashTable() {
  this._limit = 8;
  this._storage  = LimitedArray(this._limit);
  this.counter = 0;
};


HashTable.prototype.insert = function HashInsert(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var arr = this._storage.get(index);
  if (this.retrieve(k)) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][0] === k) {
        arr[i][1] = v;
      }
    } 
  } else {
    arr.push([k, v]);
    this._storage.set(index, arr);
    this.counter++;
    if(this.counter > this._limit * 0.75){
      this._limit = this._limit * 2;
      this.rehash();
    }
  }
};

HashTable.prototype.retrieve = function HashRetrieve(k) {
  setTimeout(function(){}, 5000);
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  if (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][0] === k) {
        return arr[i][1];
      }
    }


  }
  return undefined;
};

HashTable.prototype.remove = function HashRemove(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this.counter--;
  if (this.counter < this._limit * 0.25) {
    this._limit = this._limit / 2;
    this.rehash();
  }
};

HashTable.prototype.rehash = function HashRehash() {
  var tempStorage = [];
  this._storage.each(function(value, index, collection){
    if (value !== undefined) {
      for (var i = 0; i < value.length; i++) {
        tempStorage.push([value[i][0], value[i][1]]);
      }
    }
  });

  this._storage = LimitedArray(this._limit);
  this.counter = 0;
  for(var i = 0; i < tempStorage.length; i++){
    this.insert(tempStorage[i][0], tempStorage[i][1]);
  }  
};





/*
 * Complexity: What is the time complexity of the above functions?
 */





var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined) {
    this._storage.set(index,[]);
  }
  var arr = this._storage.get(index);
  if(this.retrieve(k)){
    for(var i = 0; i < arr.length; i++) {
      if(arr[i][0] === k) {
        arr[i][1] = v;
      }
    } 
  } else {
    arr.push([k,v]);
    this._storage.set(index,arr);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  if(arr){
    for(var i = 0 ; i < arr.length ; i++){
      if(arr[i][0] === k) {
        return arr[i][1];
      }
    }


  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



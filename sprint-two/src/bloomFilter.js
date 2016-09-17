var BloomFilter = function(limit){
  this._limit = limit;
  this._storage = LimitedArray(this._limit);
};

BloomFilter.prototype.populate  = function(){
  for(var i =0 ;i<200; i++) {
    var k = 'test'+i;
    var hash1 = getIndexBelowMaxForKey(k, this._limit);
    var hash2 = fnv32a(k, this._limit);
    var hash3 = murmurhash(k, this._limit, this._limit);
    this._storage.set(hash1,1);
    this._storage.set(hash2,1);
    this._storage.set(hash3,1);
  }

};

BloomFilter.prototype.retrieve = function(k) {
  var hash1 = getIndexBelowMaxForKey(k, this._limit);
  var hash2 = fnv32a(k, this._limit);
  var hash3 = murmurhash(k, this._limit, this._limit);
  if (this._storage.get(hash1) && this._storage.get(hash2) && this._storage.get(hash3)) {
    return true;
  }
  return false;
};


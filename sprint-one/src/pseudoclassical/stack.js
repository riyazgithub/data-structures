var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value){
  this.counter++;
  this.storage[this.counter] = value;
};

Stack.prototype.pop = function(){
  var ret;
  if(this.counter > 0){
    ret = this.storage[this.counter];
    this.counter--;
  }
  return ret;
};

Stack.prototype.size = function(){
  return this.counter;
};



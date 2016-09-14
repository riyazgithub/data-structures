var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.counter = 0;
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods = {};

stackMethods.push = function(value){
  this.counter++;
  this.storage[this.counter] = value;
};

stackMethods.pop = function(){
  var ret;
  if(this.counter > 0){
    ret = this.storage[this.counter];
    this.counter--;
  }
  return ret;
};

stackMethods.size = function(){
  return this.counter;
};




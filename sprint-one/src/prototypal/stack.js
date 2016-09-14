var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.counter = 0;

  return newStack;
};

var stackMethods = {};

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
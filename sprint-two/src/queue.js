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
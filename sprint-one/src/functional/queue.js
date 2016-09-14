var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0 , rear = -1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    rear++;
    storage[rear] = value;

  };

  someInstance.dequeue = function() {
    var ret
    if(front<=rear){
      ret = storage[front]
      front++
    }

  };

  someInstance.size = function() {
    return (rear-front+1)
  };

  return someInstance;
};

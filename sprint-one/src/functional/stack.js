var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = -1;

  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.pop = function() {
    var ret 
    if(counter >= 0){
      ret = storage[counter]
      counter --;
    }
    return ret
  };

  someInstance.size = function() {
    return (counter+1)
  };

  return someInstance;
};

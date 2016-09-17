

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};
var GraphNode = function(value) {
  this.value = value
  this.edges = {};
  this.visited = false;
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(key) {
  var node = new GraphNode(key);
  this.storage[key] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.storage[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var key in this.storage[node].edges) {
    this.storage[key].edges[node] = undefined;
  }
  this.storage[node] = undefined;

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return ( this.storage[fromNode].edges[toNode] !== undefined && this.storage[toNode].edges[fromNode]!=undefined );
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges[toNode] = undefined;
  this.storage[toNode].edges[fromNode] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key].value);
  }
};

Graph.prototype.dfs = function(node) {
  node = node === undefined ? this.storage[1] : node;
  var array = [];
  var returnArray = [];
  array.push(node);
  while (array.length > 0) {
    var currentNode;
    var visitedNode = array.shift();
    visitedNode.visited = true;
    returnArray.unshift(visitedNode.value);

    for (var key in node.edges) {
      currentNode = this.storage[key];
      if (!currentNode.visited) {
        array.push(this.storage[key]);
      }
    }
    node = currentNode;
  }
  return returnArray;
};

Graph.prototype.adjacencyList = function adjacencyList(node) {
  node = node || this.storage[1];
  var list = {};

  node.visited = true;
  var edges = [];
  for (var key in node.edges) {
    edges.push(parseInt(key));
  }
  list[node.value] = edges;
  for (var key in node.edges) {
    if (!this.storage[key].visited) {
      var recurseList = this.adjacencyList(this.storage[key]);
      extend(list, recurseList);
    } else {
      
    }
  }
  return list;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



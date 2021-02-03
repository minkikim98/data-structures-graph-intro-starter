
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) this.addVertex(srcValue);
    if (!this.adjList[destValue]) this.addVertex(destValue);

    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  buildGraph(edges) {
    edges.forEach(subArr => {
      if (subArr.length === 1) this.addVertex(subArr[0]);
      else this.addEdges(...subArr);
    });
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    let resultArr = [startingVertex];
    let Q = [startingVertex];
    while (Q.length > 0) {
      let first = Q.shift();
      if (!resultArr.includes(first)) resultArr.push(first);
      this.adjList[first].forEach(el => {
        if (!resultArr.includes(el)) Q.push(el);
      });
    }
    return resultArr;
  }

  depthFirstTraversalIterative(startingVertex) {
    let stack = [startingVertex];
    let resultArr = [startingVertex];
    while (stack.length > 0) {
      let last = stack.pop();
      if (!resultArr.includes(last)) resultArr.push(last);
      this.adjList[last].forEach(el => {
        if (!resultArr.includes(el)) stack.push(el);
      });
    }
    return resultArr;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    if (visited.has(startingVertex)) return;
    visited.add(startingVertex);
    vertices.push(startingVertex);
    this.adjList[startingVertex].forEach(vertex => {
      this.depthFirstTraversalRecursive(vertex, visited, vertices);
    });
    return vertices;
  }
}

module.exports = {
  Graph
};










const routeBetweenNodes = require('./routeBetweenNodes');
const routeBetweenNodesSol = require('./routeBetweenNodesSol');

var Graph = require('./../util/Graph');
var Queue = require('./../util/Queue');

var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');

test('finds if there is a path between nodes', () => {
  expect(routeBetweenNodes('A', 'C', graph)).toBe(
    routeBetweenNodesSol('A', 'C', graph)
  );
  expect(routeBetweenNodes('B', 'A', graph)).toBe(
    routeBetweenNodesSol('B', 'A', graph)
  );
});

test('find if there is NOT a path between nodes', () => {
  expect(routeBetweenNodes('A', 'E', graph)).toBe(
    routeBetweenNodesSol('A', 'E', graph)
  );
  expect(routeBetweenNodes('B', 'D', graph)).toBe(
    routeBetweenNodesSol('B', 'D', graph)
  );
});

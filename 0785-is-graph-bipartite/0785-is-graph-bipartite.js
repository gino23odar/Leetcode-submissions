/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const colors = new Map();

  for (let u = 0; u < graph.length; u++) {
    if (!dfs(graph, colors, u, 0)) {
      return false;
    }
  }

  return true;
};

const dfs = (graph, colors, u, color) => {
  if (!colors.has(u)) {
    colors.set(u, color);

    for (const v of graph[u]) {
      if (!dfs(graph, colors, v, 1 - color) || colors.get(v) === color) {
        return false;
      }
    }
  }

  return true;
};
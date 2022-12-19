/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  if (edges.length === 0) return true;
  
  edges = edges.reduce((acc, [u, v]) => {
    acc[u] = acc[u] || [];
    acc[u].push(v);
    acc[v] = acc[v] || [];
    acc[v].push(u);
    return acc;
  }, {});
  const visited = {};
  
  const valid = (edges, visited, source, destination) => {
    visited[source] = true;
    if(edges[source].includes(destination)) return true;
    
    for(const e of edges[source].filter(e => !visited[e])) {
      if(valid(edges, visited, e, destination)) return true;
    }
    
    return false;
  };
  
  return valid(edges, visited, source, destination);
};
/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    let graph = {}
    let start = null;
    
    for (let pair of adjacentPairs) {
        if (!(graph[pair[0]])) graph[pair[0]] = new Set();
        if (!(graph[pair[1]])) graph[pair[1]] = new Set();
        graph[pair[0]].add(pair[1]);
        graph[pair[1]].add(pair[0]);
    }
    
    for (let key in graph) {
        if (graph[key].size === 1) {
            start = Number(key);
            break;
        } 
    }
    return dfs(start, graph);
};

var dfs = function(start, graph) {
    let stack = [start];
    let visited = new Set();
    let output = [];
    
    while (stack.length) {
        let currVal = stack.pop();   
        visited.add(currVal);
        output.push(currVal);

        for (let neighbor of graph[currVal]) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        }
    }
    return output;
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let reach = new Set(), ans = [];
    
    for(let i = 0; i < edges.length; i++){
        reach.add(edges[i][1]);
    }
    for(let j = 0; j < n; j++){
        if(!reach.has(j)) ans.push(j);
    }
    return ans;
};
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const adj = new Map();
    
    for (const [u, v, d] of roads) {
        if (adj.has(u)) {
            const arr = adj.get(u);
            arr.push([v, d]);
            adj.set(u, arr);
        } else {
            adj.set(u, [[v, d]]);
        }
        
        if (adj.has(v)) {
            const arr = adj.get(v);
            arr.push([u, d]);
            adj.set(v, arr);
        } else {
            adj.set(v, [[u, d]]);
        }
    }
    
    let ans = Infinity;
    const visited = new Set();
    
    function dfs(node) {
        visited.add(node);
        
        for (const [nei, dis] of adj.get(node)) {
            ans = Math.min(ans, dis);
            
            if (visited.has(nei)) {
                continue;
            }
            
            dfs(nei);
        }
    }
    
    dfs(1);
    
    return ans;
};
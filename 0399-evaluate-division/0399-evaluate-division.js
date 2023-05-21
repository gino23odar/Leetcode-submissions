/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let adj = new Map();
    for(let i=0; i<equations.length; i++) {
        const [a, b] = equations[i];
        if(!adj.has(a)) {
            adj.set(a, new Set());
        }
        let value = values[i];
        adj.get(a).add([b, value]);
        
        if(!adj.has(b)) {
            adj.set(b, new Set());
        }
        adj.get(b).add([a, 1/value]);
    }
    
    let ans = Array(queries.length).fill(-1);
    
    for(let i=0; i<queries.length; i++) {
        const [start, end] = queries[i];
        if(!adj.has(start) || !adj.has(end)) {
            // nodes are not in the graph!
            ans[i] = -1.0;
            continue;
        }
        if(start == end) {
            ans[i] = 1.0;
            continue;
        }
    
        let que = [ [start, 1] ];
        let seen = new Set();    
        // bfs
        while(que.length) {
            const [node, cost] = que.pop();
            if(node == end) {
                ans[i] = cost;
                break;
            }
            if(seen.has(node)) {
                continue;
            }
            seen.add(node);
            
            for(const [nei, neiCost] of adj.get(node)) {
                que.unshift([nei, cost * neiCost]);
            }
        }
    }
    return ans;
};
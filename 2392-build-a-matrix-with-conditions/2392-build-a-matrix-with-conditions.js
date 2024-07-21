/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
    
    function getOrder(conditions) {
        // build graph
        const graph = Array(k+1).fill(0).map(r => []);
        for (const c of conditions) {
            const from = c[0], to = c[1];
            graph[from].push(to);
        }
        
        let hasCycle = false;
        const visited = Array(k+1).fill(false);
        const onPath = Array(k+1).fill(false);
        const postOrder = [];
        
        function findOrder() {
            for (let i = 1; i <= k; i++) {
                dfs(i);
                if (hasCycle) {
                    return [];
                }
            }
            return postOrder.reverse();
        }
        
        function dfs(i) {
            if (onPath[i]) {
                hasCycle = true;
                return;
            }
            if (hasCycle || visited[i]) {
                return true;
            }
            
            onPath[i] = true;
            visited[i] = true;
            
            for (const v of graph[i]) {
                dfs(v);
            }
            postOrder.push(i);
            onPath[i] = false;
        }
        
        return findOrder();
    }
    
    const rowOrder = getOrder(rowConditions);
    if (rowOrder.length == 0) {
        return [];
    }
    const colOrder = getOrder(colConditions);
    if (colOrder.length == 0) {
        return [];
    }
    
    const re = Array(k).fill(0).map(r => Array(k).fill(0));
    const colIndex = new Map();
    for (let i = 0; i < colOrder.length; i++) {
        colIndex.set(colOrder[i], i);
    }
    for (let i = 0; i < rowOrder.length; i++) {
        re[i][colIndex.get(rowOrder[i])] = rowOrder[i];
    }
    
    return re;  
};
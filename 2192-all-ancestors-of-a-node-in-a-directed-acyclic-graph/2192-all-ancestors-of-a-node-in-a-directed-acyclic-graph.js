/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    const arr = Array(n).fill(1).map(el => new Set());
    const seen = new Set();
    const egs = [];
    
    for(const [from, to] of edges) {
        if(egs[from]) egs[from].push(to)
        else egs[from] = [to]
    }

    const dfs = (curr, by) => {
        if(curr != by) {
            arr[curr].add(by);
        }
        if(seen.has(curr)) return;
        if(!egs[curr]) return;
        seen.add(curr)
        for(const dest of egs[curr]) {
            dfs(dest, by);
        }
    }
    for(let i = 0; i < n; i++) {
        dfs(i, i);
        seen.clear();
    }
    
    return arr.map(set => {
        return Array.from(set);
    })
};
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let ans = [], tmp = [], n = graph.length -1;
    
    dfs(0);
    
    function dfs(pos){
        //base case
        tmp.push(pos);
        if(pos == n) ans.push([...tmp]);
    
        //recursion
        let next = graph[pos];
        for(let i = 0; i < next.length; i++){
            dfs(next[i]);
        }
        //backtracking
        tmp.pop();
    }
    
    return ans;
};


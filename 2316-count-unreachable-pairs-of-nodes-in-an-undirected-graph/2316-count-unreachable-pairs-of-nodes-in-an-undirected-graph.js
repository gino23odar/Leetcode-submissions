/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  let edgesMap={},visited={};
    for(let i=0;i<edges.length;i++){
        let a = edges[i][0];
        let b = edges[i][1];
        if(edgesMap[a]===undefined){
            edgesMap[a] = [];
        }
        edgesMap[a].push(b);
        if(edgesMap[b]===undefined){
            edgesMap[b] = [];
        }
        edgesMap[b].push(a);
    }
    let groups=[],sum=0;
    for(let i=0;i<n;i++){
        if(visited[i]===undefined){
            let count = dfs(i);
            sum+=count;
            groups.push(count);
        }
    }
    let ans=0;
    for(let i=0;i<groups.length;i++){
        ans += groups[i]*(sum-groups[i]);
    }
    return ans/2;
    function dfs(node){
        let count=0;
        if(visited[node]===true){
            return 0;
        }
        visited[node]=true;
        count=1;
        if(edgesMap[node]!==undefined){
            for(let i=0;i<edgesMap[node].length;i++){
                let neighbour = edgesMap[node][i];
                count += dfs(neighbour);
            }
        }
        return count;
    }  
};
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    const adjlist = Array.from(Array(n), ()=>new Array());
    for(const edge of edges){
        adjlist[edge[0]].push(edge[1]);
        adjlist[edge[1]].push(edge[0]);
    }
    const ans   = Array(n).fill(0);
    const count = Array(26).fill(0);
    const dfs = (i, p, pcount)=>{
        const count = Array(26).fill(0);
        for(const j of adjlist[i]){
            if(j == p) continue;
            dfs(j, i, count);
        }
        count[labels.charCodeAt(i)-97]++
        ans[i] = count[labels.charCodeAt(i)-97];
        for(let i = 0; i < 26; i++){
            pcount[i]+=count[i];
        }
    }

    dfs(0, -1, count);
    return ans;
};
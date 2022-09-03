/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    const ans = [];
    
    const dfs = cur =>{
        if(cur.length === n){
            if(ans.indexOf(cur) === -1) ans.push(cur);
        } else {
            let lst = parseInt(cur[cur.length-1]);
            if(lst - k >= 0) dfs(cur + (lst - k));
            if(lst + k < 10) dfs(cur + (lst + k));
        }
    }
    for(let i = 1; i < 10; i++) dfs(String(i));
    return ans;
};
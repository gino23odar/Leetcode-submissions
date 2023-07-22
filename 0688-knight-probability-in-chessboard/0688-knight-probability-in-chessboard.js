/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const memo = {};
    
    function dfs(r, c, moves) {
        
        const key = `${moves}:${r}:${c}`;
        
        if(memo[key]) {
            return memo[key];
        }
        
        if(r < 0 ||
           r >= n ||
           c < 0 ||
           c >= n
        ) {
            return 0;
        }
        
        if(moves === 0) {
            return 1;
        }
        
        let inbound = 0;
        
        inbound += dfs(r-2, c-1, moves-1);
        inbound += dfs(r-1, c-2, moves-1);
        inbound += dfs(r+1, c-2, moves-1);
        inbound += dfs(r+2, c-1, moves-1);
        
        inbound += dfs(r-2, c+1, moves-1);
        inbound += dfs(r-1, c+2, moves-1);
        inbound += dfs(r+1, c+2, moves-1);
        inbound += dfs(r+2, c+1, moves-1);
        
        memo[key] = inbound;
        
        return inbound;
        
    } 
    
    let onboard = dfs(row, column, k);
    return onboard/Math.pow(8,k);
};
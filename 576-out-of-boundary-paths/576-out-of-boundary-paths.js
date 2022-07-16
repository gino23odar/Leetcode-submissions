/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    if(maxMove === 0) return 0;
    let dpCur = Array.from({length: m+2}, () => new Uint32Array(n+2));
    let dpLast = Array.from({length: m+2}, () => new Uint32Array(n+2));
    
    for(let i = 1; i <= m; i++){
        dpCur[i][1]++;
        dpCur[i][n]++;
    }
    //console.log(dpCur);
    for(let j = 1; j <= n; j++){
        dpCur[1][j]++;
        dpCur[m][j]++;
    }
    //console.log(dpCur);
    let ans = dpCur[startRow + 1][startColumn + 1];
    for(let p = 1; p < maxMove; p++){
        [dpCur, dpLast] = [dpLast, dpCur];
        for(let i = 1; i <= m; i++){
            for(let j = 1; j <= n; j++){
                dpCur[i][j] = (dpLast[i-1][j] + dpLast[i+1][j] + dpLast[i][j-1] + dpLast[i][j+1]) % 1000000007;
            }
        }
        ans = (ans + dpCur[startRow + 1][startColumn + 1]) % 1000000007;
    }
    //console.log(dpCur);
    return ans;
};
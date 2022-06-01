/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var x = 0, xEnd = n - 1, i = 0;
    var y = 0, yEnd = n - 1;
    let ans = Array(n).fill(0).map(_=>Array(n));
    while(x <= xEnd && y <= yEnd){
        for(var xT = x; xT <= xEnd; xT++) ans[y][xT] = ++i;
        for(var yT = y + 1; yT <= yEnd; yT++) ans[yT][xEnd] = ++i;
        for(var xT = xEnd - 1; xT > x; xT--) ans[yEnd][xT] = ++i;
        for(var yT = yEnd; yT > y; yT--) ans[yT][x] = ++i;
        x++;
        y++;
        xEnd--;
        yEnd--;
    }
    return ans;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const map = new Map();
    for(let i = 0; i < grid.length; i++){
        let str = '';
        for(let j = 0; j < grid.length; j++){
            str += grid[i][j] + ' ';
        }
        let c = map.has(str)?map.get(str): 0;
        map.set(str,++c);
    }
    let ans = 0;
    for(let i = 0; i < grid.length; i++){
        let str = '';
        for(let j = 0; j < grid.length; j++){
            str += grid[j][i] + ' ';
        }
        if(map.has(str))
            ans += map.get(str);
    }
    
    return ans;
};
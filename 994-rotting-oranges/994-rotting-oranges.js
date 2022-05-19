/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length, cols = grid[0].length, upDown = [1, -1, 0, 0], leftRight = [0, 0, 1, -1]; 
    let qRotten = [], minutes = 0, freshOranges = 0;
    
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === 2) qRotten.push([r, c])
            else if(grid[r][c] === 1) freshOranges++;
        }
    }
    while(freshOranges && qRotten.length) {
        const helpArr = [];
        minutes++;
        
        for(let [r, c] of qRotten) {
            
            for(let i = 0; i < 4; i++) {
                const x = r + upDown[i], y = c + leftRight[i];
                
                if(x < rows && x >= 0 && 
                   y < cols && y >= 0 && 
                   grid[x][y] === 1) {
                    freshOranges--;
                    grid[x][y] = 2;
                    helpArr.push([x, y]);
                }
            }
        }
        qRotten = helpArr;
    }
    return !freshOranges ? minutes : -1;
};
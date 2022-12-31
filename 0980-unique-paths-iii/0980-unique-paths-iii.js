/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let startPoint;
    let zeroCounts = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                startPoint = [i, j];
            } else if (grid[i][j] === 0) {
                zeroCounts += 1;
            }
        }
    }
    
    const mark = (x, y, grid, prevMovedZeros = 0) => {
        const clonedGrid = JSON.parse(JSON.stringify(grid));
        if (x < 0
           || y < 0
           || x >= clonedGrid.length
           || y >= clonedGrid[x].length) {
            return 0;
        }
        if (clonedGrid[x][y] === 1
            || clonedGrid[x][y] === -1) {
            return 0;
        }
        if (clonedGrid[x][y] === 2) {
            // console.log('to end', x, y, clonedGrid, prevMovedZeros);
            if (prevMovedZeros === zeroCounts) {
                return 1;
            }
            return 0;
        }
        if (clonedGrid[x][y] === 0) {
            clonedGrid[x][y] = -1;
            return mark(x, y + 1, clonedGrid, prevMovedZeros + 1) 
                + mark(x, y - 1, clonedGrid, prevMovedZeros + 1)
                + mark(x + 1, y, clonedGrid, prevMovedZeros + 1)
                + mark(x - 1, y, clonedGrid, prevMovedZeros + 1);
        }
        return 0;
    }

    return mark(startPoint[0] + 1, startPoint[1], grid, 0)
        + mark(startPoint[0] - 1, startPoint[1], grid, 0)
        + mark(startPoint[0], startPoint[1] + 1, grid, 0)
        + mark(startPoint[0], startPoint[1] - 1, grid, 0);
};
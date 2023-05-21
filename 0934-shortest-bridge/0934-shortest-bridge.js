/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    let firstIsland = [];
    let secondIsland = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {

            if (grid[i][j] == 1) {


                if (!firstIsland.length) {
                    dfs(grid, i, j, firstIsland)
                } else if (!secondIsland.length) {
                    dfs(grid, i, j, secondIsland)
                }
            }
        }
    }

    return firstIsland.length > secondIsland.length ? calcDist(secondIsland, firstIsland) : calcDist(firstIsland, secondIsland)

    function dfs(grid, i, j, res) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid.length || grid[i][j] != 1) return;
        grid[i][j] = 0;
        res.push([i, j])
        dfs(grid, i - 1, j, res);
        dfs(grid, i + 1, j, res);
        dfs(grid, i, j - 1, res);
        dfs(grid, i, j + 1, res);
    }



    function calcDist(firstDist, secondDist) {
        let min = Infinity;
        for (let i = 0; i < firstDist.length; i++) {
            for (let j = 0; j < secondDist.length; j++) {
                let calculateDiff = Math.abs(firstDist[i][0] - secondDist[j][0]) + Math.abs(firstDist[i][1] - secondDist[j][1]) - 1
                min = Math.min(calculateDiff, min)
            }
        }
        return min
    }
};
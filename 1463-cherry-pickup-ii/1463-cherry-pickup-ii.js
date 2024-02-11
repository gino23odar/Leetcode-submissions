/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    let cache = new Map()
    function findMax(row, col1, col2) {
        if(row < 0 || row >= grid.length || col1 < 0 || col1 >= grid[0].length || col2 < 0 || col2 >= grid[0].length) {
            return 0
        }
        let stl = `${row}-${col1}-${col2}`
        let c1Val = col1 === col2 ? 0 : grid[row][col1]
        let c2Val = col1 === col2 ? 0 : grid[row][col2]
        if(cache.has(stl)) {
            return c1Val + c2Val + cache.get(stl)
        }
        let maxVal = Math.max(
            findMax(row+1, col1-1, col2-1),
            findMax(row+1, col1-1, col2),
            findMax(row+1, col1-1, col2+1),
            findMax(row+1, col1, col2-1),
            findMax(row+1, col1, col2),
            findMax(row+1, col1, col2+1),
            findMax(row+1, col1+1, col2-1),
            findMax(row+1, col1+1, col2),
            findMax(row+1, col1+1, col2+1),
        )
        cache.set(stl, maxVal)
        return c1Val + c2Val + maxVal
    }
    return findMax(0, 0, grid[0].length-1)
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    //n is both the row and col number
    const n = grid.length - 1;
    
    //exceptions
    if(grid[0][0] === 1 || grid[n][n] === 1) return -1;
    if(n === 0 && grid[0][0] === 0) return 1;
    
    //initialize queue with origin cell
    let q = [[0,0]];
    let level = 1;
    
    //movement in every direction
    const direction = [[-1,0],[0,1],[1,1],[1,0],[1,-1],[-1,1],[-1,-1],[0,-1]];
    
    while(q.length){
        let qlen = q.length;
        while(--qlen >= 0){
            const [y,x] = q.shift();
            
            //add every dir with a 0 to the queue.
            for(let i = 0; i < direction.length; i++){
                const dirY = y + direction[i][0];
                const dirX = x + direction[i][1];
                
                //if a coordinate is 1 or if one of the coordinates is not in the grid : skip 
                if(dirY < 0 || dirX < 0 || dirY > n || dirX > n || grid[dirY][dirX] === 1) continue;
                //if coordinates match the destination cells coordinates return 
                if(dirY === n && dirX === n) return level + 1;
                
                //mark cell as visited
                grid[dirY][dirX] = 1;
                
                q.push([dirY, dirX]);
            }
        }
        level++;
    }
    return -1;
};


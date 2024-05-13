/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    let flipCol = index => {
        for(let i=0;i<grid.length; i++){
            grid[i][index] = grid[i][index] ^ 1
        }
    }
    
    let flipRow = index => {
        for(let i=0;i<grid[0].length; i++){
            grid[index][i] = grid[index][i] ^ 1
        }
    }
    
    for(let i=0; i<grid[0].length; i++){
        let colVal = 0
        for(let j=0; j<grid.length; j++){
            if(i === 0 && grid[j][i] === 0){
                flipRow(j)
                colVal = grid.length
            }else{
                colVal += grid[j][i]
            }
        }
        if(colVal < (grid.length/2)){
            flipCol(i)
        }
    }
    
    let sum = 0
    for(let i=0;i<grid.length;i++){
        sum += parseInt(grid[i].join(''), 2);
    }
    return sum
};
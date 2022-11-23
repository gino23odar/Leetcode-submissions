/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var map = {};
    var temp = 0;
    
    for(let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
            temp = board[row][col];
            if(temp === '.') continue;
            if(map['row'+ row + temp] || map['col'+ col + temp] || map['box'+ Math.floor(row/3) + Math.floor(col/3) + temp]) return false;
            map['row'+ row + temp] = 1;
            map['col'+ col + temp] = 1;
            map['box'+ Math.floor(row/3) + Math.floor(col/3) + temp] = 1;
        }
    }
    return true;
};
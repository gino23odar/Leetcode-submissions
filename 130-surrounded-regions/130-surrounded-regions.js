/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    var ylen = board.length;
    var xlen = (board[0] || []).length;
    for (var i = 0; i < ylen; i++) {
        dfs(board, i, 0, ylen, xlen);
        dfs(board, i, xlen - 1, ylen, xlen);
    }

    for (var j = 0; j < xlen; j++) {
        dfs(board, 0, j, ylen, xlen);
        dfs(board, ylen - 1, j, ylen, xlen);
    }
    for (var m = 0; m < ylen; m++) {
        for (var n = 0; n < xlen; n++) {
        if (board[m][n] === '-') board[m][n] = 'O';
        else if (board[m][n] === 'O') board[m][n] = 'X';
        }
    }
};

var dfs = function(board, y, x, ylen, xlen){
    if(y >= 0 && x >= 0 && y < ylen && x < xlen && board[y][x] == 'O'){
        board[y][x] = '-';
        dfs(board, y + 1, x, ylen, xlen);
        dfs(board, y - 1, x, ylen, xlen);
        dfs(board, y, x + 1, ylen, xlen);
        dfs(board, y, x - 1, ylen, xlen);
    }
}
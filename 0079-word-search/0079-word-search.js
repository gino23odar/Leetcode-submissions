/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rowLen = board.length, colLen = (board[0] || []).length, wordLen = word.length;
    
    if(!rowLen || !colLen || !wordLen) return false;
    
    for(let i = 0; i < rowLen; i++){
        for(let j = 0; j < colLen; j++){
            if(helper(board, word, i, j, 0)) return true;
        }
    }
    return false;
};

const helper = (board, word, i, j, n) =>{
    if(n === word.length) return true;
    if(i < 0 || i >= board.length) return false;
    if(j < 0 || j >= board[i].length) return false;
    if(board[i][j] !== word[n]) return false;
    
    let ans = false;
    let char = board[i][j];
    
    board[i][j] = '-';
    
    ans = helper(board, word, i-1, j, n+1) || helper(board, word, i+1, j, n+1) || helper(board, word, i, j-1, n+1) || helper(board, word, i, j+1, n+1);
    
    if(!ans) board[i][j] = char;
    
    return ans;  
};
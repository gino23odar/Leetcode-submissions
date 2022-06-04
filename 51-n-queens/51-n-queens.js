/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const ans = [];
    
    const dfs = (i, n, board) =>{
        
        let lpQ = i - 1;
        
        //check every placed Queen
        for(let prev = 0; prev < lpQ; prev++){
            let distRow = Math.abs(prev - lpQ);
            let distCol = Math.abs(board[prev] - board[lpQ]);
            
            //check if same col | no need to check row 
            if(board[prev] === board[lpQ]) return;
            
            // same distance in rows and cols --> diagonal move --> wrong place for lpQ
            if(distRow === distCol) return;
        }
        
        if(i === n){
            ans.push(board.slice());
            return;
        }
        
        for(let col = 0; col < n; col++){
            board.push(col);
            dfs(i+1, n, board);
            board.pop();
        }
    }
    dfs(0, n, []);
    return ans.map(mat => formatAns(mat));
};

const formatAns = mat => {
    let ans = [];
    for(let col = 0; col < mat.length; col++){
        let arr = new Array(mat.length).fill('.');
        arr[mat[col]] = 'Q';
        ans.push(arr.join(''));
    }
    return ans;
}
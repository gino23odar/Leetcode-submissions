/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let N=grid.length;
    let M=grid[0].length;
    var vis=new Set();
    let one_cells=[];

    function dfs(i,j){
        if(i<0 || i>=N || j<0 || j>=M || grid[i][j]==0 || vis.has(`${i},${j}`))return;
        vis.add(`${i},${j}`);
        for(let [x,y] of directions){
            dfs(i+x, j+y);
        }
    }
    let components=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1)one_cells.push([i,j]);
            if(!vis.has(`${i},${j}`) && grid[i][j]==1){
                dfs(i,j);
                components++;
                if(components>1)return 0;
            }
        }
    }

    if(components==0)return 0;
    let N_=vis.size;
    one_cells.push([one_cells[0][0],one_cells[0][1]]);
    if(components==1){
        for(let i=0; i<one_cells.length-1;i++){
            vis=new Set();
            let x=one_cells[i+1][0];
            let y=one_cells[i+1][1];
            grid[x][y]=0;
            dfs(one_cells[i][0], one_cells[i][1]);
            if(vis.size != N_-1 || (vis.size==0 && N_-1==0))return 1;
            grid[x][y]=1;

        }
    }
    return 2;
};
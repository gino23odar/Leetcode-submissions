/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let sol = [[1]];
    
    while(numRows > 1){
        let previous = sol[sol.length -1];
        //console.log(previous);
        let current = [1];
        for(let i = 1; i < previous.length; i++){
            current.push(previous[i -1] + previous[i]);
        }
        current.push(1);
        sol.push(current);
        numRows--;
    }
    return sol;
};
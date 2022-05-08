/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    //binary search to search through the arrays while avoiding recursion
    let i = 0;
    let solArray = [];
    let weakest = Number.POSITIVE_INFINITY;
    let rows = mat.length;
    while(i < mat.length){
        let low = 0;
        let high = mat[i].length -1;
        let center = 0;
        
        while(low <= high){
            center = Math.floor((high + low)/2);
            if(mat[i][center] === 1 && mat[i][center + 1] === 0){
                break;
            } else if(mat[i][center] === 1){
                low = center + 1;
            }else if(mat[i][center] === 0){
                high = center -1;
            }
        }
        if(mat[i][0] === 0){
            center  = -1;
        }
        center += 1;
        console.log(center)
        solArray[i] = (center*rows) + i;
        i++;
    }
    console.log(solArray);
    solArray.sort(function(a, b) { return a - b;});
    console.log(solArray);
    for(let i = 0; i < solArray.length; i++){
        solArray[i] = solArray[i] % rows;
    }
    return solArray.splice(0, k);
};
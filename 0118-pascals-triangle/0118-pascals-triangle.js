/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    let currRow =  1
    let prevRow = []

    for(let i = 0; i < numRows; i++){
        let array = []
           
        for(let j = 0; j < currRow; j++){
          if(currRow >= 3 && j !== 0 && j !== currRow-1 ){
            array.push(prevRow[j-1] + prevRow[j] )
          } else {
            array.push(1) 
          }  
        }
        prevRow = array
        result.push(array)
        currRow++

    }


    return result
};
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let numRows = rowIndex + 1;
    let rows = [[1]];
    
    const appendRow = idx => {
        let prevRow = [0, ...rows[idx-1], 0];
        let row = [];

        for(let j=0; j<prevRow.length-1; j++){
            row.push(prevRow[j] + prevRow[j+1]);
        }
        rows.push(row);

        if(rows.length < numRows)
            appendRow(idx+1);
    }

    if(numRows > 1)
        appendRow(1)

    return rows[rows.length-1];
};
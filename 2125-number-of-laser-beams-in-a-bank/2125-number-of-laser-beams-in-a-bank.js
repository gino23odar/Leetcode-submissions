/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let beams = 0;
    let devRow = [];
    for(let i = 0; i < bank.length; i++){
        let ones = (bank[i].match(/1/g) || []).length;
        if(ones > 0) devRow.push(ones)
    }
    
    for(let i = 0; i < devRow.length-1; i++){
        beams += devRow[i] * devRow[i+1]
    }
    
    return beams
};
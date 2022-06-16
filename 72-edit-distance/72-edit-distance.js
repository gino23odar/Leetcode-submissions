/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const table = fillTable(word1, word2);
    
    //i = rows, j = cols
    for(let i = 1; i < table.length; i++){
        for(let j = 1; j < table[i].length; j++){
            if(word1[i - 1] === word2[j - 1]){
                table[i][j] = table[i - 1][j - 1];
            } else {
                table[i][j] = 1 + Math.min(table[i - 1][j], table[i][j - 1], table[i- 1][j - 1]);
            }
        }
    }
    
    return table[table.length - 1][table[0].length - 1];
};

const fillTable = (word1, word2) =>{
    let len1 = word1.length, len2 = word2.length;
    const table = [];
    //fill every cell with 0
    for(let i = 0; i < len1 + 1; i++){
        table[i] = [];
        for(let j = 0; j < len2 + 1; j++){
            table[i].push(0);
        }
    }
    
    //fill the 'first' row and column with the steps 
    for(let i = 0; i < table.length; i++){
        table[i][0] = i;
        for(let j = 0; j < table[i].length; j++){
            table[0][j] = j;
        }
    }
    return table;
}
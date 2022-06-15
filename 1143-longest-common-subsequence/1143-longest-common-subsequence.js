/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const table = Array(text1.length+1).fill(0).map(() => Array(text2.length+1).fill(0));
    
    for(let i = 1; i < table.length; i++){
        for(let j = 1; j < table[i].length; j++){
            if(text1[i - 1] === text2[j - 1]){
                table[i][j] = table[i - 1][j - 1] + 1;
            } else {
                table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
            }
        }
    }
    return table[text1.length][text2.length];
};
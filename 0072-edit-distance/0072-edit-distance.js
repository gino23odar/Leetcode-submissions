/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    str1 = ' ' + word1;
    str2 = ' ' + word2;

    let firstRow = new Array(str2.length);
    let secondRow = new Array(str2.length);

    for(let i = 0; i < firstRow.length; ++i) {
        firstRow[i] = i;
    }

    secondRow[0] = 1;

    for(let i = 1; i < str1.length; ++i) {
        for(let j = 1; j < str2.length; ++j) {
        if(str1[i] === str2[j]) {
            secondRow[j] = firstRow[j - 1];
        } else {
            secondRow[j] = 1 + Math.min(secondRow[j - 1], firstRow[j], firstRow[j - 1]);
        }
        }
        
        firstRow = secondRow;
        secondRow = new Array(str2.length);
        secondRow[0] = firstRow[0] + 1;
    }
    
    return firstRow[firstRow.length - 1];
};

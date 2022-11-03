/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const wordFreq = new Map();
    let maxLen = 0, isMiddleTaken = false;
    words.forEach((word, i) => wordFreq.set(word, (wordFreq.get(word) || 0) + 1));
    for(let [word, countArr] of wordFreq){
        const reversedWord = word.split('').reverse().join('');
        if(reversedWord == word){
            if(maxLen !== 2){
                let isEvenLen = countArr % 2 == 0;
                if(!isMiddleTaken && !isEvenLen){
                    maxLen += 2*countArr;
                    isMiddleTaken = true;
                }

                else if(isEvenLen) maxLen += 2 * countArr;
                else maxLen += 2 * (countArr - 1);
                wordFreq.delete(word);   
            }
        }
        else if(wordFreq.has(reversedWord)){
            let indexArr = wordFreq.get(reversedWord);
            let min = Math.min(countArr, indexArr);
            maxLen += 4 * min;
            countArr = Math.max(0, countArr - min);
            if(countArr == 0) wordFreq.delete(word);
            indexArr = Math.max(0, indexArr - min);
            if(indexArr == 0) wordFreq.delete(reversedWord);
        }
    }
    return maxLen;
};
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const dictionarySet = new Set();
    const sentenceArr = sentence.split(" ");
    let minLen = Number.MAX_VALUE;
    let maxLen = Number.MIN_VALUE;

    dictionary.forEach(root => {
        dictionarySet.add(root);

        if(root.length < minLen) minLen = root.length;
        if(root.length > maxLen) maxLen = root.length;
    });

    for(let i = 0; i < sentenceArr.length; i++) {
        const word = sentenceArr[i];

        if(minLen === maxLen) {
            const sub = word.slice(0, maxLen);
            
            if(dictionarySet.has(sub)) {
                sentenceArr[i] = sub;
            }
        } else {
            for(let j = minLen; j <= maxLen; j++) {
                const sub = word.slice(0, j);
            
                if(dictionarySet.has(sub)) {
                    sentenceArr[i] = sub;
                    break;
                }
            }
        }
    }

    return sentenceArr.join(" ");
};
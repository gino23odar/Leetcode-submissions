/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let res = 0;
    words.forEach(word => {
        let sub = true, str = s;
        for(let i = 0; i < word.length; i++){
            let idx = str.indexOf(word[i]);
            if(idx === -1){
                sub = false;
                break;
            } else {
                str = str.slice(idx + 1);
            }
        }
        if(sub) res++;
    })
    return res;
};
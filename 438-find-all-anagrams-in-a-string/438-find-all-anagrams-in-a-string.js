/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const aASCII = 97;
    let sizeAna = p.length;
    let sizeString = s.length;
    
    const anagramMap = new Array(26);
    anagramMap.fill(0);
    for(let i = 0; i < sizeAna; i++) anagramMap[p.codePointAt(i) - aASCII]++;
    
    const stringMap = new Array(26);
    stringMap.fill(0);
    
    const anagList = [];
    let start = 0;
    
    for(let end = 0; end < sizeString; end++){
        let char = s.codePointAt(end);
        
        if(anagramMap[char - aASCII] === 0){
            start = end + 1;
            stringMap.fill(0);
        } else {
            stringMap[char - aASCII]++;
            if(end - start + 1 === sizeAna){
                if(checkForAna(stringMap, anagramMap)) anagList.push(start);
                stringMap[s.codePointAt(start) - aASCII]--;
                start++;
            }
        }
    }
    return anagList;
};
    
function checkForAna(stringMap, anagramMap){
    for(let i = 0; i < 26; i++){
        if(stringMap[i] !== anagramMap[i]) return false;
    }
    return true;
}
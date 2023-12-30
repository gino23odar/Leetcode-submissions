/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let len = words.length;
    let map = new Map();
    
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(map.get(words[i][j])){
                map.set(words[i][j], map.get(words[i][j]) + 1);
            } else {
                map.set(words[i][j], 1);
            }
        }
    }
    for(let [key, value] of map.entries()){
        if((value % len) == 0){
            continue;
        } else {
            return false
        }
    }
    return true
};
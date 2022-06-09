/**
 * @param {string} digits
 * @return {string[]}
 */
var mapNum = {
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"]
    }

var letterCombinations = function(digits) {
    
    if(!digits.length) return [];
    
    return getCombs(digits.toString(), ['']);
};

function getCombs(digits, prevC){
    let newCombs = [];
    
    for(let prev of prevC){
        for(let posLetter of mapNum[digits[0]]){
            newCombs.push(prev.concat(posLetter));
        }
    }
    return digits.length > 1 ? getCombs(digits.slice(1), newCombs) : newCombs;
}
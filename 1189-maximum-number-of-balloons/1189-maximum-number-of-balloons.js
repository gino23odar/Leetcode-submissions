/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map();
    
    for(let i = 0; i < text.length; i++){
        map.set(text[i], map.get(text[i])+1 || 1);
    }
    
    return Math.min((map.get('b')), (map.get('a')), Math.floor(map.get('l')/2), Math.floor(map.get('o')/2), (map.get('n'))) || 0
};
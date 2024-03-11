/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = new Map();
    let word = '', aft = '';
    for(let i = 0; i < s.length; i++){
        map.set(s[i], map.get(s[i])+1||1);
        if(!order.includes(s[i])) aft += s[i]
    }
    for(let i = 0; i < order.length; i++){
        if(map.get(order[i])){
            for(let j = 0; j < map.get(order[i]); j++){
                word += order[i]
            }
        }
    }
    return word + aft
};
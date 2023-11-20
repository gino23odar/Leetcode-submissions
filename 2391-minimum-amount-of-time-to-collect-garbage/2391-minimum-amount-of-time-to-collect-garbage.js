/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let pickup = {};
    let time = 0;
    
    for(let i = 0; i < garbage.length; i++){
        for(let j = 0; j < garbage[i].length; j++){
            pickup[garbage[i][j]] = i;       
        }
        time += garbage[i].length;
    }
    for(let i = 0, j; i < travel.length; i++){
        j = 0;
        if(pickup['G'] > i){
            j++;
        }
        if(pickup['P'] > i){
            j++;
        }
        if(pickup['M'] > i){
            j++;
        }
        time += travel[i] * j;
    }
    return time;
};
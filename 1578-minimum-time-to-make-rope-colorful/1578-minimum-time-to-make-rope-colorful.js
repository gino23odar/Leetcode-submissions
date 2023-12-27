/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time = 0;
    let curMax = 0;
    
    for(let i = 0; i < colors.length; i++){
        if(i > 0 && colors[i] !== colors[i-1]){
            curMax = 0;
        } 
        
        time += Math.min(curMax, neededTime[i])
        curMax = Math.max(curMax, neededTime[i])
    }
    return time
};
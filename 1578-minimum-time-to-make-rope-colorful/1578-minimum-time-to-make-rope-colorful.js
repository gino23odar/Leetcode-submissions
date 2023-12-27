/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time = 0;

    for(let i = 1; i < colors.length; i++){
        if(colors[i] == colors[i-1]){
            let j = i;
            let timesN = [neededTime[i-1]];
            let tot = neededTime[i-1];
            while(colors[i] == colors[j]){
                timesN.push(neededTime[j])
                tot += neededTime[j];
                j++;
            }
            time += (tot - Math.max(...timesN))
            i = j
        }
    }
    
    return time
};
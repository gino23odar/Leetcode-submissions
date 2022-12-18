/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = [];
    const len = temperatures.length;
    for(let i = 0; i < len; i++){
        const tmp1 = temperatures[i];
        let nextDay = 0;
        for(let j = i + 1; j < len; j++){
           const tmp2 = temperatures[j];
            if(tmp2 > tmp1){
                nextDay = j - i;
                break;
            } 
        }
        result.push(nextDay);
    }
    return result;
};
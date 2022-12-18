/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    return temperatures.map((temp, idx) => {
        let nextDay = 0
        for(let i = idx + 1; i < temperatures.length; i++) {
            if(temp < temperatures[i]) {
                nextDay = i - idx
                return nextDay
            }
        }
        return nextDay
    })
};
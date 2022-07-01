/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1]);
    
    let ans = 0;
    for(let i = 0; truckSize && i < boxTypes.length; i++){
        let sum = Math.min(boxTypes[i][0], truckSize);
        ans += sum * boxTypes[i][1];
        truckSize -= sum;
    }
    return ans;
};
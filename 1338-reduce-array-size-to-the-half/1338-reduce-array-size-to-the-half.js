/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const half = arr.length/2;
    const countMap = {};
    for(let i = 0; i < arr.length; i++){
        countMap[arr[i]] = (countMap[arr[i]] || 0) +  1;
    }
    const counts = Object.values(countMap).sort((a,b) => b - a);
    let redCount = 0, index = 0;
    while(index < counts.length && redCount < half){
        redCount += counts[index++];
    }
    return index;
};
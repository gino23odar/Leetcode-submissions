/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const memo = new Map();
    const mod = 10**9 + 7
    
    arr.sort((a, b) => a - b);
    arr.forEach(num => memo.set(num, 1))
           
    for(let i = 1; i < arr.length; i++) {
        
        for(let j = i-1; j >= 0; j--) {
            
            if(arr[i] % arr[j]) continue;
            
            const num2 = arr[i] / arr[j];;
            
            if(!memo.has(num2)) continue;
            
            const waysToNum1 = memo.get(arr[j]);
            const waysToNum2 = memo.get(num2);
            const totalWays = waysToNum1 * waysToNum2;
            
            memo.set(arr[i], (memo.get(arr[i]) + totalWays));
        }
    }
    
    const totalTrees = [...memo.values()].reduce((acc, cur) => acc + cur, 0);
    return totalTrees % mod;
};
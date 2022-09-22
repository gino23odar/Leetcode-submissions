/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    var arr = new Array(37).fill(0);
    var maxVal = -Infinity;
    var counter = 0;
    for(let i = 1; i <= n; i++){
        var sum = sumVal(i)
        arr[sum] = ++arr[sum];
        if(maxVal < arr[sum]){
            maxVal = arr[sum]
        }
    }
    arr.forEach(ele =>{
        if(ele === maxVal)counter++
    })
    return counter
        
    
};
function sumVal(n){
    var sum = 0
    while(n!== 0){
        sum = sum +  n%10;
        n = Math.floor(n/10);
            
    }
    return sum
}
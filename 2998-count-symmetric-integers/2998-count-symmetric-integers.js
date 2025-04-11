/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    let sum = (nums) =>{
        let tot = 0;
        for(let i = 0; i < nums.length; i++){
            tot += +nums[i];
        }
        return tot;
    }
    for(let i = low; i <= high; i++){
        let num = i.toString();
        if(num.length % 2 == 1) continue;
        if(sum(num.slice(0, num.length/2)) == sum(num.slice(num.length/2, num.length))) count++;
    }
    return count;
};
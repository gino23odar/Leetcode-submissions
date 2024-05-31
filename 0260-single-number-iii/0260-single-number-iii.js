/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0;
    // Get the xor of the 2 unique numbers
    for (let num of nums) {
        xor ^= num;
    }
    
    // find differentiating bit on the xor of both numbers (first '1' from the right)
    // since only one of the numbers will have that '1' in that position this will
    // serve to differentiate them.
    let diff = 1;
    while ((xor & diff) === 0) {
        diff <<= 1;
    }
    //console.log(xor)
    //console.log(diff)
    
    // use the differentiating bit to separate the numbers in nums into 2 groups
    // each of the unique numbers will be placed into a different group
    let a = 0, b = 0;
    for (let num of nums) {
        //console.log(num & diff)
        if ((num & diff) === 0) {
            a ^= num;
        } else {
            b ^= num;
        }
    }
    return [a, b];
};
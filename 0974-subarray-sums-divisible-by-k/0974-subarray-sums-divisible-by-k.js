/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const prevsums = Array(k).fill(0);
    const mod = (n, m)=> (n % m + m) % m;
    let ans = 0, prev = 0;
    for(const num of nums){
        prev = mod(prev + num, k)
        if(prev == 0) ans++;
        //console.log(prev)
        ans+=prevsums[prev];
        //console.log(ans)
        prevsums[prev]++;
        //console.log(prevsums)
    }
    return ans;  
};
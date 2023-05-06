/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
   nums.sort((a,b)=>{return a-b})
   let i=0,j=nums.length-1,count=0,mod = (10**9 + 7)
   
   let powers = pow(2,nums.length,mod);
   
   while(i<=j){
       if((nums[i] + nums[j]) > target){
           j -= 1
       }else{
           count = (count + powers[j-i])%mod
           i+=1
       }
   }
    
    return count%mod
};

let pow = (base,power,mod)=>{
    let powers = [1],res=1
    for(let i=1;i<=power;i++){
        res = (res*base)%mod
        powers.push(res)
    }
    return powers
}
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let res = [], sum = evenSum(nums);
    for(let i = 0; i < queries.length; ++i){
        sum -= nums[queries[i][1]] % 2 === 0? nums[queries[i][1]] : 0;
        nums[queries[i][1]] += queries[i][0];
        if(nums[queries[i][1]] % 2 === 0){
            sum += nums[queries[i][1]];
        }
        res.push(sum);
    }
    return res;
};

const evenSum = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] % 2 === 0) sum += arr[i];
    }
    return sum;
}
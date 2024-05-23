/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    nums = nums.sort();
    let cnt = [];
    const backtrack = (st, arr) =>{
        cnt.push([...arr])
        for(let i = st; i < nums.length; i++){
            arr.push(nums[i]);
            backtrack(i+1,arr);
            arr.pop();
        }
    }
    backtrack(0,[]);
    //console.log(cnt)
    let res = 0;
    const isBeautiful = (arr) =>{
        let val = true;
        let map = new Map();
        for(let i = 0; i < arr.length; i++){
            map.set(arr[i], map.get(arr[i]+1)||1)
        }
        //console.log(map)
        for(let i = 0; i < arr.length; i++){
            if(map.get(arr[i]-k)){
                //console.log(arr[i]);
                val = false;
                break;
            }
        }
        return val;
    }
    
    for(let i = 0; i < cnt.length; i++){
        if(isBeautiful(cnt[i])){
            res++;
            //console.log(cnt[i])
        }
    }
    return res-1;
};
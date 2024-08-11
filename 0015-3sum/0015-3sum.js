/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let ans = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return ans;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let l = i + 1;
        let r = nums.length - 1;
        
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                ans.push([nums[i], nums[l], nums[r]]);
                do {
                    l++;
                }
                while (l < r && nums[l] === nums[l - 1]);
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
            
        }
    }

    return ans
};
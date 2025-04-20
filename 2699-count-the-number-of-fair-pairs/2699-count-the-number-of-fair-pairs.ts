function countFairPairs(nums: number[], lower: number, upper: number): number {
    nums.sort((a, b) => a - b);
    let res = 0, l = 0, r = 0;

    for (let i = nums.length - 1; i > 0; --i) {
        if (nums[i] + nums[i - 1] < lower) break;
        if (nums[i] + nums[l] > upper) continue;

        while (r < i && nums[r] + nums[i] <= upper) r++;
        if (r === i || nums[r] + nums[i] > upper) r--;
        while (l <= r && nums[l] + nums[i] < lower) l++;

        if (l <= r) res += r - l + 1;
    }

    return res;
};
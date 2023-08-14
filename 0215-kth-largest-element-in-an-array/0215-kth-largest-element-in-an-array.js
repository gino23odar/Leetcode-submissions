/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (!nums.length) return nums;
    // standard quick select algorithm
    let random = (i, j) => Math.trunc(i + Math.random()*(j - i));
    let quick_select = (_nums, k) => {
        if (!_nums.length) return false;
        let pivot = random(0, _nums.length);
        // divide
        let [left, right] = [[], []];
        for (let [i, e] of _nums.entries()) {
            if (i == pivot) continue;
            if (e < _nums[pivot]) left.push(e);
            else right.push(e);
        }
        // conquer
        if (left.length == k) return _nums[pivot];
        if (left.length > k) return quick_select(left, k);
        return quick_select(right, k - (left.length+1));
    }
    return quick_select(nums, nums.length - k);
};
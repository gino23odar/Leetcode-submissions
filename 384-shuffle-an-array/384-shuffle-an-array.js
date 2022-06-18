/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const shuff = this.nums.slice();
    const n = shuff.length;
    const swap = (arr, i, j) =>{
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    for(let i = 0; i < n; i++){
        swap(shuff, i, Math.floor(Math.random()*n));
    }
    return shuff;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
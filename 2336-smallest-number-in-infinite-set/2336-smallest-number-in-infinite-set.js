
var SmallestInfiniteSet = function() {
    this.arr = new Array(1000).fill(1);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    for(let i = 0; i < 1000; i++){
        if(this.arr[i] != 0){
            this.arr[i] = 0;
            return i + 1;
        }
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.arr[num - 1] = 1;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.arr = [...Array(length)].map(()=> new Map())
    this.snapId = 0
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.arr[index].set(this.snapId, val)
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snapId++
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    while(snap_id >= 0){
        if(this.arr[index].has(snap_id)){
            return this.arr[index].get(snap_id);
        }
        snap_id--
    }
    return 0
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
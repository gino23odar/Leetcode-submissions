
var MyHashSet = function() {
    this.hashset = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this.hashset.indexOf(key) === -1){
        this.hashset.push(key)
    } 
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const index = this.hashset.indexOf(key)
    if(index >= 0) {
        delete this.hashset[index]
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if(this.hashset.includes(key)){
        return true
    }
    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
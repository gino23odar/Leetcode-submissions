/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if (nums1.length * nums2.length === 0) return [];
    const heap = new MinHeap(nums1, nums2);
    heap.push([0,0]);
    const result = [];
    while (!heap.isEmpty() && result.length < k) {
        const [i, j] = heap.pop();
        result.push([nums1[i], nums2[j]]);
        if (i + 1 < nums1.length) heap.push([i + 1, j])
        if (j + 1 < nums2.length) heap.push([i, j + 1])
    }
    return result;
};

class MinHeap {
    constructor(nums1, nums2) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.store = [];
        this.seen = new Set();
    }
    
    isEmpty() {
        return this.store.length === 0;
    }
    
    push(value)  {
        const str = value.join('-');
        if (this.seen.has(str)) return;
        this.seen.add(str);
        this.store.push(value);
        this.heapifyUp(this.store.length - 1);
    }
    
    pop() {
        if (this.store.length < 2) return this.store.pop();
        const value = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return value;
    }
    
    heapifyUp(child) {
        while (child) {
            const parent = Math.floor((child - 1) / 2);
            if (this.value(child) < this.value(parent)) {
                this.swap(child, parent);
                child = parent;
            } else {
                return child;
            }
        }
    }
    
    heapifyDown(parent) {
        while (true) {
            const [child1, child2] = [1,2].map((n) => parent * 2 + n).filter((n) => n < this.store.length);
            let child = child1;
            if (child2 && this.value(child2) < this.value(child1)) {
                child = child2;
            }
            if (child && this.value(child) < this.value(parent)) {
                this.swap(child, parent);
                parent = child;
            } else {
                return parent;
            }
        }
    }
    
    value(idx) {
        const [i, j] = this.store[idx];
        return this.nums1[i] + this.nums2[j];
    }
    
    swap(idx1, idx2) {
        [this.store[idx1], this.store[idx2]] = [this.store[idx2], this.store[idx1]]
    }
}
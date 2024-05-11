/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
  const n = quality.length;
  const tuples = new Array(n).fill();

  for (let i = 0; i < n; i++) {
    const expectedWage = wage[i] / quality[i];
    tuples[i] = [expectedWage, quality[i]];
  }

  tuples.sort((a, b) => a[0] - b[0]);

  let ans = Infinity;
  let sumOfQuality = 0;
  const maxHeap = new MaxHeap([]);

  for (let i = 0; i < n; i++) {
    const [expectedWage, quality] = tuples[i];
    sumOfQuality += quality;
    maxHeap.insert(quality);

    if (maxHeap.getLength() > k) {
      sumOfQuality -= maxHeap.remove();
    }
    if (maxHeap.getLength() === k) {
      ans = Math.min(ans, sumOfQuality * expectedWage);
    }
  }

  return ans;
};

class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  getLength() {
    return this.heap.length;
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(array, i, array.length - 1);
    }
    return array;
  }

  peek() {
    return this.heap[0];
  }

  siftUp(array) {
    let idx = array.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (parentIdx >= 0) {
      if (array[idx] > array[parentIdx]) {
        this.swap(array, idx, parentIdx);
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      } else {
        break;
      }
    }
  }

  insert(num) {
    this.heap.push(num);
    this.siftUp(this.heap);
  }

  siftDown(array, idx, endIdx) {
    let leftChildIdx = idx * 2 + 1;
    while (leftChildIdx <= endIdx) {
      let idxToSwap = leftChildIdx;
      let rightChildIdx = idx * 2 + 2;
      if (
        rightChildIdx <= endIdx &&
        array[rightChildIdx] > array[leftChildIdx]
      ) {
        idxToSwap = rightChildIdx;
      }
      if (array[idxToSwap] > array[idx]) {
        this.swap(array, idxToSwap, idx);
        idx = idxToSwap;
        leftChildIdx = idx * 2 + 1;
      } else {
        break;
      }
    }
  }

  remove() {
    const valueToRemove = this.heap[0];
    this.swap(this.heap, 0, this.heap.length - 1);
    this.heap.pop();
    this.siftDown(this.heap, 0, this.heap.length - 1);

    return valueToRemove;
  }

  swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
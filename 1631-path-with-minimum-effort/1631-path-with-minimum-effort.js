/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const minHeap = new MinHeap([]);
  const n = heights.length;
  const m = heights[0].length;

  const visited = new Array(n).fill().map((_) => new Array(m).fill(false));
  minHeap.insert([0, 0, 0]);
  const dirs = [-1, 0, 1, 0, -1];

  while (minHeap.getLength() > 0) {
    const [oi, dist, oj] = minHeap.remove();
    if (oi === n - 1 && oj === m - 1) {
      return dist;
    }
    visited[oi][oj] = true;
    for (let i = 0; i < dirs.length - 1; i++) {
      const ni = oi + dirs[i];
      const nj = oj + dirs[i + 1];
      if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
        if (visited[ni][nj]) continue;

        const currDist = Math.abs(heights[oi][oj] - heights[ni][nj]);
        const nextDist = Math.max(dist, currDist);
        minHeap.insert([ni, nextDist, nj]);
      }
    }
  }

  return -1;
};

class MinHeap {
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
      if (array[idx][1] < array[parentIdx][1]) {
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
        array[rightChildIdx][1] < array[leftChildIdx][1]
      ) {
        idxToSwap = rightChildIdx;
      }
      if (array[idxToSwap][1] < array[idx][1]) {
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
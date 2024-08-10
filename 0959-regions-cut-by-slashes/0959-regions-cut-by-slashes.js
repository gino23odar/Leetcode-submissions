/**
 * @param {string[]} grid
 * @return {number}
 */
class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  
  find(p) {
    if (this.parent[p] != p) p = this.find(this.parent[p]);
    return p;
  }
  
  union(p, q) {
    const pID = this.find(p);
    const qID = this.find(q);
    
    if (pID == qID) return;
    
    this.parent[pID] = qID;
    this.count--;
  } 
  
  size() {
    return this.count;
  }
}

var regionsBySlashes = function(grid) {
  const N = grid.length;
  const uf = new UnionFind(4 * N * N);
  
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const root = (4 * N * i) + (4 * j);
      const char = grid[i].charAt(j);
      
      if (char != '\\') {
        uf.union(root + 0, root + 1);
        uf.union(root + 2, root + 3);
      }
      
      if (char != '/') {
        uf.union(root + 0, root + 2);
        uf.union(root + 1, root + 3);
      }
      

      if (i - 1 >= 0) {
        uf.union(root + 0, root - (4 * N) + 3);
      }

      if (i + 1 < N) {
        uf.union(root + 3, root + (4 * N) + 0);
      }

      if (j - 1 > 0) {
        uf.union(root + 1, root - 4 + 2);
      }

      if (j + 1 < N) {
        uf.union(root + 2, root + 4 + 1);
      }
    }
  }
  
  return uf.size();
};
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  const tree = _grid => {
    const node = new Node();
    const isAllOne = _grid.every(_g => _g.every(v => v === 1));
    const isAllZero = _grid.every(_g => _g.every(v => v === 0));
    if (isAllOne) {
      node.val = true;
      node.isLeaf = true;
    } else if (isAllZero) {
      node.val = false;
      node.isLeaf = true;
    } else {
      let _len = _grid.length;
      let left = _grid.map(_g => _g.slice(0, _len / 2));
      let right = _grid.map(_g => _g.slice(_len / 2));
      node.topLeft = tree(left.slice(0, _len / 2));
      node.topRight = tree(right.slice(0, _len / 2));
      node.bottomLeft = tree(left.slice(_len / 2));
      node.bottomRight = tree(right.slice(_len / 2));
      node.isLeaf = false;
      node.val = true;
    }
    return node;
  }
  
  const head = tree(grid);
  return head;
};
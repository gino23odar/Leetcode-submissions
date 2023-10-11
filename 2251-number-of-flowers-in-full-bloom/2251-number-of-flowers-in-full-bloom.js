/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
  const heap = new MinPriorityQueue({
    compare: (a, b) => a[1] - b[1]
  });

  flowers.sort((a, b) => a[0] - b[0]);

  const sortedPeople = people.slice().sort((a, b) => a - b);
  
  const map = {};
  
  let i = 0;
  
  for (const ind of sortedPeople) {
    while (i < flowers.length && flowers[i][0] <= ind) {
      heap.enqueue(flowers[i]);
      ++i;      
    }
    while (heap.size() && heap.front()[1] < ind) {
      heap.dequeue();
    }
    map[ind] = heap.size();
  }
  return people.map(ind => map[ind]);
};
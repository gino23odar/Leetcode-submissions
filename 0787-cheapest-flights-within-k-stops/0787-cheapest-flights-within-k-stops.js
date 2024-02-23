/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const maxStops = k >= n ? n - 1 : k;

  let previous = new Array(n).fill(Infinity);
  previous[src] = 0;

  const current = [...previous];

  for (let i = 0; i <= maxStops; i += 1) {
    flights.forEach((flight) => {
      current[flight[1]] = Math.min(
        current[flight[1]],
        previous[flight[0]] + flight[2],
      );
    });
    previous = [...current];
  }

  return current[dst] === Infinity ? -1 : current[dst];
};
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const n = ring.length, m = key.length
    let dp = Array(n).fill(0)
    index_ring = new Map()
    for (let i = 0; i < n; i++)
        if (index_ring.has(ring[i]))
            index_ring.get(ring[i]).push(i)
        else
            index_ring.set(ring[i], [i])
    index_key = new Map() 
    for (let i = 0; i < m; i++)    
        index_key.set(i, index_ring.get(key[i]))
    for (let j of index_key.get(0))
        dp[j] = 1 + Math.min(j, n - j)
    for (let i = 1; i < m; i++)
        for (let k of index_key.get(i)) {
            dp[k] = Math.min(...index_key.get(i-1).map((j) => dp[j] + 1 + Math.min(Math.abs(k - j), n - k + j, n - j + k)))
        }
    return Math.min(...index_key.get(m-1).map(j => dp[j]))
};
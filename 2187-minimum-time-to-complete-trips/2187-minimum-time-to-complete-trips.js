/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    function getOutcome(t) {
        return time.reduce((acc, cur) => acc + Math.floor(t / cur), 0)
    }
    
    const minTime = Math.min(...time)
    let low = 1, high = totalTrips * minTime

    while (low < high) {
        const mid = Math.floor((low + high) / 2)
        const outcome = getOutcome(mid)
        if (outcome >= totalTrips)  high = mid
        else low = mid + 1
    }
    
    return high
};
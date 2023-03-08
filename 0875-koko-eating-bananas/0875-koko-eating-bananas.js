/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) =>{
    let low = 1;
    let high = Math.max(...piles);
    let ans = high
    while (low <= high) {
        const mid = low + Math.floor((high - low)/2);
        let hours = 0;
		//Calculate total time required to finish all bananas with mid as average speed
        for(let p of piles) {
            hours += Math.ceil(p/mid)
        }
        if(hours <= h) {
		//If this is the possible ans than lesser value can also be ans so shift end to mid-1
            ans = Math.min(mid, ans);
            high = mid - 1;
        }
        else  {
            low = mid + 1;     
        }           
    }
    return ans;
};
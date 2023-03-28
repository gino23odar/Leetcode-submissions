/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const [one, seven, thirty] = costs;
    const memo = new Map()
    
    function recurse(curr, idx) {
        if(memo.has(curr)) return memo.get(curr);
        if(idx >= days.length) return 0;
        if(curr >= days[idx]) return recurse(curr, idx+1);
        
        const buy1 = recurse(days[idx], idx) + one;
        const buy7 = recurse(days[idx]+6, idx) + seven;
        const buy30 = recurse(days[idx]+29, idx) + thirty;
        const min = Math.min(buy1, buy7, buy30);
        memo.set(curr, min);
        return min;
    }
    return recurse(0, 0);
};
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let costs  = [];
    for(let i = 0; i < s.length; i++){
        costs.push(Math.abs(s.charCodeAt(i) - t.charCodeAt(i)))
    }
    //console.log(costs)
    if(Math.min(...costs) > maxCost) return 0
    let maxLen = 1;
    for(let st = 0; st < costs.length; st++){
        let cur = costs[st];
        if(cur > maxCost) continue;
        for(let end = st+1; end < costs.length; end++){
            cur += costs[end];
            if(cur > maxCost) break;
            if(cur <= maxCost && (end - st + 1) > maxLen){
                maxLen = end - st + 1;
                //console.log(end,st)
            }
        }
    }
    return maxLen
};
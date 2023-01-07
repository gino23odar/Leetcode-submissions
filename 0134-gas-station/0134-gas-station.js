/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tank = 0, cur = 0, idx = false;
    for (let i = 0; i < gas.length; i++) {
        let fill = gas[i];
        let used = cost[i];
        if (cur + fill - used > 0) {
            if (idx === false) {
                idx = i;
            };
            cur += fill - used;
        } else {
            idx = false;
            cur = 0;
        };
        tank += fill - used;
    };
    return (tank > -1 ? idx : -1);
};
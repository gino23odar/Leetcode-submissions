/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(trust.length === 0 && n == 1) return 1;
    if(trust.length === 0) return -1;
    
    const vMap = new Set();
    const jMap = new Map();
    
    for(let i = 0; i < trust.length; i++){
        const trusted = trust[i][1];
        const time = jMap.get(trusted);
        vMap.add(trust[i][0]);
        
        if(time){
            jMap.set(trusted, time+1);
        } else {
            jMap.set(trusted, 1);
        }
    }
    for(let [key, value] of jMap){
        if(value === n - 1 && !vMap.has(key)) return key
    }
    return !trust.length ?n :-1;
};
/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
    if(stamp === target) return [0];
    let slen = stamp.length, tlen = target.length - slen + 1, targetD = true, stampD, res = [], i, j;
    let s = stamp.split(''), t = target.split('');
    while(targetD){
        for(i = 0, targetD = false; i < tlen; i++){
            for(j = 0, stampD = false; j < slen; j++){
                if(t[i+j] === '|'){
                    continue;
                } else if(t[i+j] !== s[j]){
                    break;
                } else {
                    stampD = true;
                }
            }
            if(j === slen && stampD){
                for(j = i, targetD = true; j < slen + i; j++){
                    t[j] = '|';
                }
                res.unshift(i);
            }
        }
    }
    for(i = 0; i < t.length; i++){
        if(t[i] !== '|') return [];
    }
    return res;
};
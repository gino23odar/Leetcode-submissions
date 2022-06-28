/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let ans = 0;
    let arr = s.split(''), dict = {}, mem = [];
    
    arr.map(c => {
        dict[c] = dict[c] ? dict[c] + 1 : 1;
    })
    
    let val = Object.values(dict);
    
    val.map(v => {
        if(mem[v]){
            let next = v;
            while(next > 0){
                if(!mem[next]){
                    mem[next] = true;
                    ans += v - next;
                    break;
                } else {
                    next--;
                }
            }
            if(next === 0) ans += v;
        } else {
            mem[v] = true;
        }
    })
    return ans;
};
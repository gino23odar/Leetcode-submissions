/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    var ans = 2;
    var calc = () => {
        for (let dif = 0; dif<501/ans; dif++){
            let mp = new Map();
            nums.forEach((e) => {
                if (!mp.has(e)) mp.set(e,0);
                if (mp.has(e-dif))
                    mp.set(e,Math.max(mp.get(e),1+mp.get(e-dif)));
                if (!mp.get(e)) mp.set(e,1);
                ans = Math.max(ans,mp.get(e));
            });
        }
        return ans;
    }
    calc();
    nums.reverse();
    calc();
    return ans;
};
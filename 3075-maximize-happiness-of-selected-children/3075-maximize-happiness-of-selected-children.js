/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness = happiness.sort((a,b) => b - a);
    let ans = 0;
    for(let i = 0; i < k; i++){
        if((happiness[i] - i) > 0){
            ans += happiness[i] - i
        }
    }
    //console.log(ans)
    return ans
};
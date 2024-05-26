/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    const MOD = 1000000007;
    let memo = new Array(n+1).fill(null).map(()=>new Array(2).fill(null).map(()=> new Array(3).fill(-1)))
    let combos = (n, absences, lates) =>{
        if(absences >= 2 || lates  >= 3) return 0
        if(n === 0) return 1;
        if(memo[n][absences][lates] !== -1) return memo[n][absences][lates];
        let count = 0;
        count = combos(n-1,absences,0);
        count = (count + combos(n-1, absences+1, 0)) %MOD;
        count = (count + combos(n-1, absences,lates+1))  %MOD;
        
        memo[n][absences][lates] = count;
        return count;
    }
    return combos(n,0,0)
};
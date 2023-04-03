/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let numberOfPeople = new Array(limit+1).fill(0);
    for(let p of people){
        numberOfPeople[p]++;
    }
    let left = 1, right = limit;
    let cur = 0, tot = 0, ppl = 0;
    while(left<=right){
        while(!numberOfPeople[left] && left<= right){
            left++;
        }
        while(!numberOfPeople[right] && left<= right){
            right--;
        }
        if(cur+right<=limit && ppl<2){
            cur += right;
            numberOfPeople[right]--;
            ppl++;
        } else if(cur+left<=limit && ppl<2){
            cur += left;
            numberOfPeople[left]--;
            ppl++;
        } else {
            cur = 0;
            tot++;
            ppl = 0;
        }
    }
    if(cur>0) tot++;
    return tot;
};
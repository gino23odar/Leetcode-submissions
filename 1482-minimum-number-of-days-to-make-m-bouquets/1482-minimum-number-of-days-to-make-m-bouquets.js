/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(m*k>bloomDay.length) return -1
    let left=Math.min(...bloomDay)
    let right=Math.max(...bloomDay)
    let ans=right
    while(left<=right){
        let count=0
        let number=0
        let mid=Math.floor((left+right)/2)
        for(let i=0;i<bloomDay.length;i++){
            if(bloomDay[i]<=mid){
                count++
                if(count===k){
                    number++
                    count=0
                }
            }
            if(bloomDay[i]>mid) count=0
        }
        if(number<m) left=mid+1
        if(number>=m) {
            right=mid-1
            ans=mid
        }
    }
    return ans
};


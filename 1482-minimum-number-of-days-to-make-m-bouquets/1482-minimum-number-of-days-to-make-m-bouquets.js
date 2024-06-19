/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(m*k > bloomDay.length)return -1
    let start = 0,end = Number.MAX_VALUE,final=-1
    
    while(start <= end){
          let mid = Math.floor((start+end)/2)
          if(helper(bloomDay,m,k,mid)){
              end = mid - 1
              final = mid
          }else{
              start = mid+1
          }
    }
    return final
};

var helper = (days,m,k,mid)=>{
    let count=0,total=0
    for(let i=0;i<days.length;i++){
        if(days[i] <= mid){
            count++
            if(count == k){
                total++
                count = 0
            }
        }else{
            count = 0
        }
    }
    return total >= m
}
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const array = new Array(n).fill(1);
    for(let i = 1; i < n;i++){
        if(ratings[i] > ratings[i - 1])
            array[i] = array[i - 1] + 1;
    }
    for(let i = n - 2; i >= 0; i--){
        if(ratings[i] > ratings[i + 1])
            array[i] = Math.max(array[i], array[i + 1] + 1);
    }
    let sum = array.reduce((a, b) => {
        return a + b;
    })
    return sum;
};
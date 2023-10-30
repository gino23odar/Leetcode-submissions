/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
return arr.map((el)=>{
        if (el === 0 ) {
            return [0,el];
        };
        return [el.toString(2).match(/[1]/g).length, el];
    }).sort((a,b)=>a[0]-b[0]||a[1]-b[1]).map((el)=>el[1]);
};
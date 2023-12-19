/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let lenW = img.length;
    let lenH = img[0].length;
    
    const calcAvg = (x,y) =>{
        let sum = 0, div = 0;
        for(let i = -1; i < 2; i++){
            for(let j = -1; j < 2; j++){
                let cX = x + i;
                let cY = y + j;
                if(cX < 0 || cY < 0 || cX > lenW-1 || cY > lenH-1) continue;
                if(img[cX][cY] !== undefined){
                    sum += img[cX][cY]
                    div++
                }
            }
        }
        return Math.floor(sum/div);
    }
    
    let resArr = [];
    
    for(let i = 0; i < lenW; i++){
        let arr = [];
        for(let j = 0; j < lenH; j++){
            arr.push(calcAvg(i, j));
        }
        resArr.push(arr)
    }
    return resArr
};
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let n = points.length;
    if(n < 2) return n;
    
    const gcd = (a, b) =>{
        if(!b) return a;
        return gcd(b, a%b);
    }
    
    let maxP = 0, curMax, overlap, vPoints;
    
    let map = new Map();
    
    for(let i = 0; i < n; i++){
        curMax = 0;
        overlap = 0;
        vPoints = 0;
        
        for(let j = i + 1; j < n; j++){
            if(points[i] === points[j]){
                overlap++;
            } else if(points[i][0] === points[j][0]){
                vPoints++;
            } else {
                let yDif = points[j][1] - points[i][1];
                let xDif = points[j][0] - points[i][0];
                let g = gcd(xDif, yDif);
                
                yDif = Math.floor(yDif/g);
                xDif = Math.floor(xDif/g);
                
                let tmp = [yDif, xDif];
                if(map.has(tmp.join(''))){
                    map.set(tmp.join(''), map.get(tmp.join('')) +1);
                } else {
                    map.set(tmp.join(''), 1);
                }
                
                curMax = Math.max(curMax, map.get(tmp.join('')));
            }
            
            curMax = Math.max(curMax, vPoints);
        }
        
        maxP = Math.max(maxP, curMax + overlap + 1);
        
        map.clear();
    }
    return maxP;
};
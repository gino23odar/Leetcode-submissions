/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    let total=0;
    let status= [];
    var detonate = function(abc) {
        for(let j=0;j<bombs.length;j++){
            if(abc==j) continue;
            if(status.indexOf(j)!=-1) continue;
            if((bombs[j][0]-bombs[abc][0])**2+(bombs[j][1]-bombs[abc][1])**2<=bombs[abc][2]**2){
                status.push(j);
                detonate(j);
            }
        }
    }
    for(let i=0;i<bombs.length;i++){
        status=[];
        status.push(i);
        detonate(i)
        if(status.length>total) total=status.length;
    }
    return total
};
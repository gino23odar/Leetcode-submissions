/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let provinceNum = 0;
    const checked = new Set();
    isConnected.forEach((row, i) => {
        if(checked.has(i)) return ;
        provinceNum++;
        const q = row.map((x,i) => x? i : -1).filter((x) => x > -1);
        while(q.length > 0){
            const pro = q.pop();
            if(!checked.has(pro)){
                checked.add(pro);
                q.push(...isConnected[pro].map((x,i) => x ? i : -1).filter((x) => x > -1));
            }
        }
    })
    return provinceNum;
};
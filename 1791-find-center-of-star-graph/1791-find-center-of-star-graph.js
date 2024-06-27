/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let or = new Map()
    let dest = new Map()
    
    for(let i = 0; i < edges.length; i++){
        if(or.get(edges[i][0])){
            return edges[i][0]
        } else {
            or.set(edges[i][0],1)
        }
        
        if(dest.get(edges[i][1])){
            return edges[i][1]
        } else {
            dest.set(edges[i][1],1)
        }
    }
    return -1
};
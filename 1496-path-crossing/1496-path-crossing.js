/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let directions = {
        'N': [1,0],
        'S': [-1,0],
        'W': [0,1],
        'E': [0,-1],
    }
    
    let cur = [0,0]
    
    let visited = new Map();
    
    for(let i = 0; i < path.length; i++){
        visited.set(cur.join(''), 1)
        let step = directions[path[i]];
        cur[0] += step[0];
        cur[1] += step[1];
        
        if(visited.get(cur.join(''))){
            return true;
        }
    }
    return false
};
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let origin = paths.map(city =>{
        return city[0]
    })
    
    let orCheck = new Set(origin)
    
    for(let i = 0; i < paths.length; i++){
        if(orCheck.has(paths[i][1])){
            continue;
        } else {
            return paths[i][1]
        }
    }
};
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1 = version1.split('.');
    version2 = version2.split('.');
    
    for(let i = 0; i < version1.length; i++){
        let vers1 = parseInt(version1[i], 10) || Number(version1[i]);
        let vers2 = parseInt(version2[i], 10) || Number(version2[i]);
        
        if(vers1 > vers2){
            return 1;
        } else if( vers2 > vers1){
            return -1;
        } else continue;
    }
    if(version1.length > version2.length){
        for(let i = version2.length; i < version1.length; i++){
            if(parseInt(version1[i],10) > 0) return 1
        }
    }
    if(version2.length > version1.length){
        for(let i = version1.length; i < version2.length; i++){
            if(parseInt(version2[i],10) > 0) return -1
        }
    }
    return 0
};
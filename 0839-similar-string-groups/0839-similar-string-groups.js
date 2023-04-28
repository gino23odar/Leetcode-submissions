let check = function(str1,str2){
    if(str1 == str2){
        return true;
    }
    let pre;
    let diff = 0;
    for(k=0;k<str1.length;k++){
        if(str1[k]!=str2[k]){
            if(!pre){
                pre = k;
            }
            if(++diff==3) return false;
            if(pre!=k) if(!(str1[pre]==str2[k]&&str2[pre]==str1[k])){
                return false;
            }
        }
    }
    return true;
}

/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    let ans=[]
    while(strs.length){
        ans.push(new Array(1).fill(strs[0]))
        strs.shift();
        if(!strs.length) return ans.length
        for(i=0;i<ans[ans.length-1].length;i++){
            for(j=0;j<strs.length;j++){
                if(check(ans[ans.length-1][i],strs[j])){
                    ans[ans.length-1].push(strs[j]);
                    strs[j]=null;
                }
            }strs = strs.filter((e)=>{if(e) return e})
            
        }
    }
    return ans.length
};
/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let freq = {};
    for(let i=0; i<s.length; i++){
        if(freq[s[i]]){
            freq[s[i]]++;
        }else{
            freq[s[i]]=1;
        }
    }
        
    let max=0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i!==j){
                let iFreq=0;
                let jFreq=0;
                let iTotalFreq=0;
                for(let k=0; k<s.length; k++){
                    if(s[k]===arr[i]){
                        iFreq++;
                        iTotalFreq++;
                        if(jFreq<iFreq && iTotalFreq<freq[arr[i]]){
                            iFreq=0;
                            jFreq=0;
                        }
                    }
                    if(s[k]===arr[j]){
                        jFreq++;
                    }
                    if(jFreq-iFreq>max && iFreq){
                        max = jFreq-iFreq;
                    }
                }
            }
        }
    }
    return max;
};
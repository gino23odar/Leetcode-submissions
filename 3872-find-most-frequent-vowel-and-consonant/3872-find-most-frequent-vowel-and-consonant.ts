function maxFreqSum(s: string): number {
    let vowMap = new Map();
    let conMap = new Map();
    let maxVow = 0;
    let maxCon = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i].match(/[aeiou]/)){
            if(vowMap[s[i]]){
                vowMap[s[i]]++;
            } else {
                vowMap[s[i]] = 1;
            }
            if(vowMap[s[i]] > maxVow) maxVow = vowMap[s[i]];
        } else {
            if(conMap[s[i]]){
                conMap[s[i]]++;
            } else {
                conMap[s[i]] = 1;
            }
            if(conMap[s[i]] > maxCon) maxCon = conMap[s[i]];
        }
    }
    return maxVow + maxCon;
};
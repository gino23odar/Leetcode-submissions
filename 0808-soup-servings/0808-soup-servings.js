/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if(n>4450) return 1;

    const cache = {}
    const dfs = (a,b) => {
        const key = `${a}#${b}`
        if(cache[key]) return cache[key];

        if(a<=0) return b<=0 ? 0.5 : 1
        else if(b<=0) return 0;

        return cache[key] =  0.25 * (dfs(a-100,b) + dfs(a-75,b-25) + dfs(a-50,b-50) + dfs(a-25,b-75))
    }

    return dfs(n,n);
};
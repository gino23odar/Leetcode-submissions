/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
   let dp = new Array(51).fill().map(() => new Array(51).fill().map(() => new Array(51).fill(-1)));

   let mod = 1e9+7;
 const helper = (m,n,maxMove,str,stc) =>{
        if(str<0||str>=m||stc<0||stc>=n)
        return 1;
        if(maxMove==0)
        return 0;
        if(dp[maxMove][str][stc]!=-1)
        return dp[maxMove][str][stc];
        let ans=0;
        ans=(ans+helper(m,n,maxMove-1,str+1,stc))%mod;
         ans=(ans+helper(m,n,maxMove-1,str-1,stc))%mod;
          ans=(ans+helper(m,n,maxMove-1,str,stc+1))%mod;
           ans=(ans+helper(m,n,maxMove-1,str,stc-1))%mod;
           return dp[maxMove][str][stc]=ans;
    }
    
    dp=new Array(maxMove+1).fill().map(() =>    Array(m+1).fill().map(()=>Array(n+1).fill(-1)));
    return helper(m,n,maxMove,startRow,startColumn);
};
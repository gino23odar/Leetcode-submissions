/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];
    
    genParentheses('',0,0,n,ans);
    
    return ans;
};

function genParentheses(current, open, closed, max,ans){
    if(current.length == max * 2){
        ans.push(current);
        return;
    }
    
    if(open < max){
        genParentheses(current + '(', open +1, closed, max,ans);
    }
    
    if(closed < open){
        genParentheses(current + ')', open, closed + 1, max,ans);
    }
}
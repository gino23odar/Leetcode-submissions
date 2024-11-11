class Solution {
    public List<String> res = new ArrayList<>();
    public List<String> generateParenthesis(int n) {
        backtrack(0,0,"",n);
        return res;
    }
    private void backtrack(int open, int close, String valid, int n){
        if(open == n && close == n){
            res.add(valid);
            return;
        }
        
        if(open < n) backtrack(open+1, close, valid + '(', n);
        if(open > close) backtrack(open, close + 1, valid + ')', n);
    }
}
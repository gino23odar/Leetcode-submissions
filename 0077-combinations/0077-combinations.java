class Solution {
    public List<List<Integer>> res = new ArrayList<>();
    
    public List<List<Integer>> combine(int n, int k) {
        backtrack(1, new ArrayList<>(), n, k);
        return res;
    }
    private void backtrack(int start, List<Integer> cur, int n, int k){
        if(cur.size() == k){
            res.add(new ArrayList<>(cur));
            return;
        }
        
        for(int i = start; i <= n; i++){
            cur.add(i);
            backtrack(i+1, cur, n, k);
            cur.remove(cur.size() - 1);
        }
    }
}
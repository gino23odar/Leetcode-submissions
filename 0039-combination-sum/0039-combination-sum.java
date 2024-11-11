class Solution {
    public List<List<Integer>> res = new ArrayList<>();
    
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        backtrack(candidates, target, 0, new ArrayList<>());
        return res;
    }
    
    private void backtrack(int[] candidates, int target, int start, List<Integer> cur){
        if(target == 0){
            res.add(new ArrayList<>(cur));
            return;
        }
        
        if(target < 0) return;
        
        for(int i = start; i < candidates.length; i++){
            cur.add(candidates[i]);
            backtrack(candidates, target - candidates[i], i, cur);
            cur.remove(cur.size() - 1);
        }
    }
}
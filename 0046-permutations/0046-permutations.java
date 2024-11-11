class Solution {
    public List<List<Integer>> res = new ArrayList<>();
    
    public List<List<Integer>> permute(int[] nums) {
        boolean[] used = new boolean[nums.length];
        backtrack(new ArrayList<>(), nums, used);
        return res;
    }
    
    private void backtrack(List<Integer> cur, int[] nums, boolean[] used){
        if(cur.size() == nums.length){
            res.add(new ArrayList<>(cur));
            return;
        }
        
        for(int i = 0; i < nums.length; i++){
            if(used[i] == true) continue;
            cur.add(nums[i]);
            used[i] = true;
            backtrack(cur, nums, used);
            cur.remove(cur.size() - 1);
            used[i] = false;
        }
    }
}
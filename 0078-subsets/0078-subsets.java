class Solution {
    public List<List<Integer>> res = new ArrayList<>();
    
    public List<List<Integer>> subsets(int[] nums) {
        backtrack(0, new ArrayList<>(), nums);
        return res;
    }
    
    private void backtrack(int start, List<Integer> cur, int[] nums){
        res.add(new ArrayList<>(cur));
        for(int i = start; i < nums.length; i++){
            cur.add(nums[i]);
            backtrack(i+1, cur, nums);
            cur.remove(cur.size() - 1);
        }
    }
}
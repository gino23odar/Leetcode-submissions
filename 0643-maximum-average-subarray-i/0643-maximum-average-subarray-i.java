class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int mTotal = Integer.MIN_VALUE;
        int sum = 0;
        
        for(int i = 0; i < k; i++){
            sum += nums[i];
        }
        
        mTotal = sum;
        
        for(int i = 0; i < nums.length-k; i++){
            sum = sum - nums[i] + nums[i+k];
            if(sum > mTotal) mTotal = sum;
        }
        
        double ans = (double) mTotal/k;
        return ans;
    }
}
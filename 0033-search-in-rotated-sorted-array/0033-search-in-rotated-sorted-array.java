class Solution {
    public int search(int[] nums, int target) {
        int l = 0;
        int r = nums.length-1;
        
        while(l <= r){
            int mid = l + (r-l)/2;
            int left = nums[l];
            int middle = nums[mid];
            int right = nums[r];
            
            if(middle == target){
                return mid;
            }
            
            if(left <= middle){
                if(left <= target && target <= middle){
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                if(middle <= target && target <= right){
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
        return -1;
    }
}
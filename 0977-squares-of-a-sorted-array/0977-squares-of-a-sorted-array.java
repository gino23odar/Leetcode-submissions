class Solution {
    public int[] sortedSquares(int[] nums) {
        int lPointer = 0;
        int rPointer = nums.length -1;
        int[] result = new int[nums.length];
        int pos = nums.length - 1;
        
        while(lPointer <= rPointer){
            int left = nums[lPointer] * nums[lPointer];
            int right = nums[rPointer] * nums[rPointer];
            
            if(right > left){
                result[pos] = right;
                rPointer--;
            } else {
                result[pos] = left;
                lPointer++;
            }
            pos--;
        }
        
        return result;
    }
}
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        for (int num : nums) {
            maxHeap.add(num);
        }
        
        int res = 0;
        
        while(k-- > 0){
            res = maxHeap.poll();
        }
        
        return res;
    }
}
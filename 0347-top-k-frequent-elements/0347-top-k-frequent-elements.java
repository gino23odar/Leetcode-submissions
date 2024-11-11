class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        ArrayList<Integer> res = new ArrayList<>();
        
        for(int num : nums){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        
        List<Integer>[] arr = new ArrayList[nums.length + 1];
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int key = entry.getKey();
            int value = entry.getValue();

            if (arr[value] == null) {
                arr[value] = new ArrayList<>();
            }

            arr[value].add(key);
        }
        
        for (int i = nums.length; i >= 0 && res.size() < k; i--) {
            if (arr[i] != null) {
                res.addAll(arr[i]);
            }
        }
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = res.get(i);
        }
        
        return result;
    }
}
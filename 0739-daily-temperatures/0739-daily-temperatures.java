class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        Stack<Integer> stack  = new Stack<>();
        int n = temperatures.length;
        int[] res = new int[n];
        
        for(int i = 0; i < n; i++){
            while(stack.size() > 0 && temperatures[i] > temperatures[stack.peek()]){
                int index = stack.pop();
                res[index] = i - index;
            }
            stack.add(i);
        }
        return res;
    }
}
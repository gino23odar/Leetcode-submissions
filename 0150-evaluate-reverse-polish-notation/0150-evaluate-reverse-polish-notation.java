class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        int res = 0;
        int tmp = 0;
        
        for(String s : tokens){
            switch(s){
                case "+":
                    tmp = stack.pop() + stack.pop();
                    stack.add(tmp);
                    break;
                case "-":
                    int substracted = stack.pop();
                    int num = stack.pop() - substracted;
                    stack.add(num);
                    break;
                case "*":
                    tmp = stack.pop() * stack.pop();
                    stack.add(tmp);
                    break;
                case "/":
                    int divisor = stack.pop();
                    int div = stack.pop() / divisor;
                    stack.add(div);
                    break;
                default:
                    stack.add(Integer.parseInt(s));
            }
        }
        
        return stack.pop();
    }
}
class MinStack {
    
    class Element {
        int val;
        int min;
        Element next;
        
        public Element(int val, int min){
            this.val = val;
            this.min = min;
        }
    }
    
    Element top = null;

    public MinStack() {
    }
    
    public void push(int val) {
        if(top == null){
            top = new Element(val,val);
        } else {
            Element e = new Element(val, Math.min(val, top.min));
            e.next = top;
            top = e;
        }
    }
    
    public void pop() {
        if(top == null){
            return;
        } else {
            Element temp = top.next;
            top = temp;
        }
    }
    
    public int top() {
        if(top == null){
            return -1;
        } else {
            return top.val;
        }
    }
    
    public int getMin() {
        if(top == null){
            return -1;
        } else {
            return top.min;
        }
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
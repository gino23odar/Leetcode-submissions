/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length == k) return '0'
    let st = [];
    for(let i = 0; i < num.length; i++){
        while(st.length > 0 && k > 0 && num[i] < st[st.length-1]){
            st.pop();
            k--;
        }
        st.push(num[i])
    }
    while(k > 0){
        st.pop();
        k--;
    }
    while(st.length > 1 && st[0] == 0){
        st.shift();
    }
    return st.join('')
};
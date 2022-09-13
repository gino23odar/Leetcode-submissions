/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let len = data.length;
    for(let i = 0; i < len; i++){
        let str = fn(data[i]);
        if(str.startsWith('0')){
            continue;
        } else if(str.startsWith('110')){
            if(i + 1 >= len) return false;
            let a  = fn(data[i + 1]);
            if(a.startsWith('10')){
                i += 1;
            } else {
                return false;
            }
        } else if(str.startsWith('1110')){
            if(i + 2 >= len) return false;
            let a = fn(data[i + 1]), b = fn(data[i + 2]);
            if(a.startsWith('10') && b.startsWith('10')){
                i += 2;
            } else {
                return false;
            }
        } else if(str.startsWith("11110")) {
            if (i + 3 >= len) return false;
            let a = fn(data[i + 1]), b = fn(data[i + 2]), c = fn(data[i + 3]);
            if (a.startsWith("10") && b.startsWith("10") && c.startsWith("10")){
                i += 3;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } 
    return true;
};

const fn = (num) =>{
    let str = num.toString(2);
    while(str.length !== 8) str = '0' + str;
    return str;
}
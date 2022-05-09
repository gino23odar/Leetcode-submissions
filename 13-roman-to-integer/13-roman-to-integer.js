/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanArr = s.split('');
    let resultNum = 0;
    let i = 0;
    let loopLength = romanArr.length;
    while(i < loopLength){
        if(romanArr.includes('M')){
            resultNum += 1000;
            let indexM = romanArr.indexOf('M');
            if(romanArr[indexM -1] === 'C'){
                resultNum -= 100;
                romanArr.shift();
                romanArr.shift();
            }else{
                romanArr.shift();
            }
        } else if(romanArr.includes('D')){
            resultNum += 500;
            let indexD = romanArr.indexOf('D');
            if(romanArr[indexD -1] === 'C'){
                resultNum -= 100;
                romanArr.shift();
                romanArr.shift();
            }else{
                romanArr.shift();
            }
        }else if(romanArr.includes('C')){
            resultNum += 100;
            let indexC = romanArr.indexOf('C');
            if(romanArr[indexC -1] === 'X'){
                resultNum -= 10;
                romanArr.shift();
                romanArr.shift();
            }else{
                romanArr.shift();
            }
        }else if(romanArr.includes('L')){
            resultNum += 50;
            let indexL = romanArr.indexOf('L');
            if(indexL != 0 && romanArr[indexL -1] === 'X'){
                resultNum -= 10;
                romanArr.shift();
                romanArr.shift();
            }else{
                romanArr.shift();
            }
        }else if(romanArr.includes('X')){
            resultNum += 10;
            let indexX = romanArr.indexOf('X');
            if(romanArr[indexX -1] === 'I'){
                resultNum -= 1;
                romanArr.shift();
                romanArr.shift();
            }else{
                romanArr.shift();
            }
        }else if(romanArr.includes('V')){
            resultNum += 5;
            let indexV = romanArr.indexOf('V');
            if(romanArr[indexV -1] === 'I'){
                resultNum -= 1;
                romanArr.shift();
                romanArr.shift();
            }else{
                romanArr.shift();
            }
        }else if(romanArr.includes('I')){
            resultNum += 1;
            romanArr.shift();
        }
        i++;
    }
    return resultNum;
};
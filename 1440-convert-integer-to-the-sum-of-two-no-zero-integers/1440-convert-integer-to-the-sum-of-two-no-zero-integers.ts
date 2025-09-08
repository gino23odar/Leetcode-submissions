function getNoZeroIntegers(n: number): number[] {
    let a;
    let b;

    for(let i = 1; i < n; i++){
        a = i;
        b = n - i;
        if(a+b == n){
            if(isNonZero(a) && isNonZero(b)){
                return [a,b];
            }
        }
    }

    function isNonZero(num: number): boolean{
        const numString = num.toString();
        return !numString.includes('0')
    }
};
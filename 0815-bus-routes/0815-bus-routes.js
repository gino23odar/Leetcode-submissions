/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
     if(source == target) return 0;
        let stepBus = new Map();
        for(let i = 0;i < routes.length;i++){
            for(let step of routes[i]){
                if(stepBus.has(step)){
                    stepBus.get(step).add(i);
                }
                else{
                    let temp = new Set();
                    temp.add(i);
                    stepBus.set(step, temp);
                }
            }
        }
        let visit = [];
        let pass = new Set();
        let step = [];
        step.push(source);
        pass.add(source);
        let res = 1;
        while(!(step.length==0)){
            let temp = [];
            for(let st of step){
                for(let bus of stepBus.get(st)){
                    if(!visit[bus]){
                        for(let num of routes[bus]){
                            if(!pass.has(num)){
                                if(num == target)return res;
                                else{
                                    pass.add(num);
                                    temp.push(num);
                                }
                            }
                        }
                        visit[bus] = true;
                    }
                }
            }
            res++;
            step = temp;
        }
        return -1;
};
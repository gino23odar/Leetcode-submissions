/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(A) {
    A=A.map(([a,b],i)=>[a,b,i]).sort((a,b)=>b[0]-a[0])
    let pq = new MinPriorityQueue({ priority: ([e,p,idx])=>p+10**(-7)*(idx+1) }),
         curtime=A[A.length-1][0],res=[]
    while(A.length||pq.size()){
        while(A.length&&curtime>=A[A.length-1][0]) //get everything available inside the pq
            pq.enqueue(A.pop())
        if(pq.size()){ //make the selection
            let [e,p,idx]=pq.dequeue()['element']
            curtime+=Number(p)
            res.push(idx)
        }
        else if(A.length) //otherwise, increment time for the next element. 
            curtime=A[A.length-1][0]
    }
    return res
};
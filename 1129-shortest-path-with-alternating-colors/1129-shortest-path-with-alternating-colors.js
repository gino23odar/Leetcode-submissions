/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    const graph = [], RED = 0, BLUE = 1;
    
    for(let i=0; i<redEdges.length; i++){
        
        const source = redEdges[i][0];
        const target = redEdges[i][1];
        
        graph[source] = graph[source] || [];
        graph[source].push([target, RED]);
    }
    
    for(let i=0; i<blueEdges.length; i++){
        
        const source = blueEdges[i][0];
        const target = blueEdges[i][1];
        
        graph[source] = graph[source] || [];
        graph[source].push([target, BLUE]);
    }
    const distances = [];
    distances.length = n;
    distances.fill(-1);
    
    distances[0] = 0;

    const zero = graph[0];
    if(!zero){
        return distances;
    }
    const visited = [];
    for(let i=0; i<n; i++){
        visited[i] = [false, false];
    }
    const queue = [];
    for(let i=0; i<zero.length; i++){
        queue.push(zero[i]);
    }
    
    let level = 1;
    
    while(queue.length > 0){
    
        let len = queue.length;
        for(let i=0; i<len; i++){
            const nodeArr = queue.shift();
            const node = nodeArr[0];
            const nodeColor = nodeArr[1];
            if(visited[node][nodeColor] === false && 
               (distances[node] === -1 || distances[node] > level)){
                distances[node] = level;
            }
            visited[node][nodeColor] = true;
            const kids = graph[node];
            if(!kids) continue;
            const filtered = kids.filter(kidArr => {
                
                const kid = kidArr[0];
                const kidColor = kidArr[1];
                
                return kidColor === (nodeColor == RED ? BLUE : RED) && (visited[kid][kidColor] === false);
            }); 
            queue.push(...filtered);
        }
        level++;
    }
    return distances;
};
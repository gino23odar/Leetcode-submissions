/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(n <=0) return [];
    if(n === 1) return [0]
  
  
    let graph ={}
    let indegree  = Array(n).fill(0)
    let leaves = []
    
    for(let [v,e] of edges){
      if(!(v in graph)) graph[v] = [];
      if(!(e in graph)) graph[e] = [];
      graph[v].push(e)
      graph[e].push(v)
      indegree[v]++
      indegree[e]++
    }
  

    for(let i =0; i<indegree.length; i++){
      if(indegree[i] === 1) leaves.push(i)
    }
  
  
    let total  = n;
  
    while(total > 2){
      let size = leaves.length
      total -= size;
      
      for(let i =0 ; i<size; i++){
        let vertex = leaves.shift()
        for(let edge of  graph[vertex] ){
          indegree[edge]--
          if(indegree[edge] === 1) leaves.push(edge)
        }
      }
    }
  
  return leaves;
};
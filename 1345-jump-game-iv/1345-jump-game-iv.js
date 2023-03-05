/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    let visited={},queue=[],node,map={},index,jumps,neighbour;
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]===undefined){
            map[arr[i]] = [];
        }
        map[arr[i]].push(i);
    }
    visited[0]=true;
    queue.push([0,0]);
    while(queue[0]!==undefined){
        node = queue.shift();
        index = node[0];
        jumps = node[1];
        if(index===arr.length-1){
            return jumps;
        }
        if(map[arr[index]]!==undefined){
            for(let i=0;i<map[arr[index]].length;i++){
                neighbour = map[arr[index]][i];
                if(visited[neighbour]===undefined){
                    visited[neighbour] = true;
                    queue.push([neighbour,jumps+1]);
                }
            }
        }
        delete map[arr[index]];
        neighbour = index+1;
        if(neighbour>=0 && neighbour<=arr.length-1){
            if(visited[neighbour]===undefined){
                visited[neighbour] = true;
                queue.push([neighbour,jumps+1]);
            }
        }
        neighbour = index-1;
        if(neighbour>=0 && neighbour<=arr.length-1){
            if(visited[neighbour]===undefined){
                visited[neighbour] = true;
                queue.push([neighbour,jumps+1]);
            }
        }
    }
};
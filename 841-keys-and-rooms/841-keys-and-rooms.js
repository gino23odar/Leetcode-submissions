/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let roomsLeft = [rooms[0]];
    let visited = [true];
    
    while(roomsLeft.length > 0){
        let room = roomsLeft.pop();
        
        for(let i = 0; i < room.length; i++){
            let key = room[i];
            if(!visited[key]){
                roomsLeft.unshift(rooms[key]);
            }
            visited[key] = true;
        }
    }
    //console.log(visited);
    const vCount = visited.filter((room) => room).length;
    //console.log(vCount);
    return rooms.length === vCount;
};
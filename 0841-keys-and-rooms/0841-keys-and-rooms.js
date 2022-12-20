/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visitedRooms = {};
    
    const visitRoom = (i) => {
        if (!visitedRooms[i]) {
            visitedRooms[i] = true;
            
            for (let j = 0; j < rooms[i].length; j++) {
                visitRoom(rooms[i][j]);
            }
        }
    };
    
    visitRoom(0);
    return rooms.length === Object.keys(visitedRooms).length;
};
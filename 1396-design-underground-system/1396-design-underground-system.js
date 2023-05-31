
var UndergroundSystem = function() {
    this.map = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if(!this.map[id]) this.map[id] = {};
    else if( this.map[id] && this.map[id]['checkIn']) return null;
    this.map[id]['checkIn'] = { stationName: stationName, t: t};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if(!this.map[id]) return null;
    let checkInPojo = this.map[id]['checkIn'];
    this.map[id]['checkOut'] =  { stationName: stationName, t: t};
    let stationsChecincheckoutMap = this.map[`${checkInPojo['stationName']}-${stationName}`] || [];
    stationsChecincheckoutMap.push( parseInt(t) - parseInt(checkInPojo['t']) );
    this.map[`${checkInPojo['stationName']}-${stationName}`] = stationsChecincheckoutMap;
    delete this.map[id]['checkIn'];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let startEndDurations =  this.map[`${startStation}-${endStation}`]
    return ((startEndDurations.reduce(function (sum, value) {
        return sum + value;
    }, 0)) / startEndDurations.length);
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
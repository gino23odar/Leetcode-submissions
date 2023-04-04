/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let start_id = 0, end_id = 0, partition_count = 0;
    while(end_id < s.length){
        if(s.substring(start_id, end_id).includes(s[end_id]+"")){
            partition_count++;
            start_id = end_id;
        }
        end_id++;
    }
    if(s.substring(start_id, end_id).includes(s[end_id-1]+"")){
        partition_count++;
    }
    return partition_count;
};
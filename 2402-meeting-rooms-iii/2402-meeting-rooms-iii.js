/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

    const pq = new MinPriorityQueue({ compare: (a, b) => a[1] === b[1] ? a[2] > b[2] : a[1] > b[1] });
    let roomRecords = new Array(n).fill(0);
    let rooms = new MinPriorityQueue();
    for (let i = 0; i < n; i++) {
        rooms.enqueue(i);
    }

    for (let [start, end] of meetings) {
        const duration = end - start;
        while (pq.front()?.[1] <= start) {
            rooms.enqueue(pq.dequeue()[2]);
        }

        if (rooms.size() !== 0) {
            const room = rooms.dequeue().element;
            pq.enqueue([start, end, room]);
            roomRecords[room]++;
            continue;
        }

        let firstMeetingToEnd = pq.dequeue();
        const room = firstMeetingToEnd[2];
        pq.enqueue([firstMeetingToEnd[1], firstMeetingToEnd[1] + duration, room]);
        roomRecords[room]++;
    }

    let res = -1;
    let max = -Infinity;
    for (let i = 0; i < roomRecords.length; i++) {
        if (max < roomRecords[i]) {
            res = i;
            max = roomRecords[i];
        }
    }
    return res;
};
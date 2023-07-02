/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
    let max = 0
    let prev = new Map([[ 0, Array(n).fill(0) ]])

    for ( let count = 1; count <= requests.length; count++ ) {
        let next = new Map()

        for ( let i = 0; i < requests.length; i++ ) {
            prev.forEach( ( transfers, mask ) => {

                if ( mask & ( 1 << i ) ) return

                if ( next.has( mask |= 1 << i ) ) return

                transfers = [...transfers]
                transfers[requests[ i ][0]]--
                transfers[requests[ i ][1]]++

                if ( ! transfers.some( x => x ) )
                    max = count
                
                next.set( mask, transfers )
				
            })
        }
    
        prev = next
    }

    return max
};
function trapRainWater(heightMap: number[][]): number {
    const n = heightMap.length;
    const m = heightMap[0].length;
    const pq: [number, [number, number]][] = [];
    const vis: number[][] = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = 0; i < m; i++) {
        pq.push([heightMap[0][i], [0, i]]);
        pq.push([heightMap[n - 1][i], [n - 1, i]]);
        vis[0][i] = 1;
        vis[n - 1][i] = 1;
    }

    for (let i = 1; i < n - 1; i++) {
        pq.push([heightMap[i][0], [i, 0]]);
        pq.push([heightMap[i][m - 1], [i, m - 1]]);
        vis[i][0] = 1;
        vis[i][m - 1] = 1;
    }

    const delrow = [-1, 0, 1, 0];
    const delcol = [0, 1, 0, -1];
    let ans = 0;

    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [height, [row, col]] = pq.shift()!;

        for (let i = 0; i < 4; i++) {
            const nrow = row + delrow[i];
            const ncol = col + delcol[i];

            if (nrow >= 0 && ncol >= 0 && nrow < n && ncol < m && !vis[nrow][ncol]) {
                ans += Math.max(height - heightMap[nrow][ncol], 0);
                pq.push([Math.max(height, heightMap[nrow][ncol]), [nrow, ncol]]);
                vis[nrow][ncol] = 1;
            }
        }
    }
    return ans;
};
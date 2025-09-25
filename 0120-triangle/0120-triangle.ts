function minimumTotal(triangle: number[][]): number {
    const length = triangle.length;

    const dp = Array(length + 1).fill(0);

    for (let i = length - 1; i >= 0; i--) {
        const row = triangle[i];
        for (let j = 0; j < row.length; j++) {
            dp[j] = row[j] + Math.min(dp[j], dp[j + 1]);
        }
    }

    return dp[0];
}
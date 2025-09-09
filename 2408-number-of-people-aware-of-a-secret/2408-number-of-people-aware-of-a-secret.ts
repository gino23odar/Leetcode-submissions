function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    const MOD = 1e9 + 7, aware = Array(n + forget - delay).fill(0);
    aware[forget - delay] = 1; aware[forget] = 1;
    let r = 2;
    for (let i = forget + 1; i < n - delay + forget; i++)
        aware[i] = (MOD + aware[i - 1] + aware[i - delay] - aware[i - forget]) % MOD,
            r = (MOD + r + aware[i] - aware[i - forget]) % MOD;
    return r;
};
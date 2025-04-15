function goodTriplets(nums1: number[], nums2: number[]): number {
        const n = nums1.length;

    const posInNums2 = new Array(n);
    for (let i = 0; i < n; i++) {
        posInNums2[nums2[i]] = i;
    }

    const transformed = nums1.map(v => posInNums2[v]);

    class BIT {
        tree = new Array(n + 2).fill(0);
        update(i: number, delta: number) {
            i++;
            while (i < this.tree.length) {
                this.tree[i] += delta;
                i += i & -i;
            }
        }
        query(i: number): number {
            i++;
            let res = 0;
            while (i > 0) {
                res += this.tree[i];
                i -= i & -i;
            }
            return res;
        }
    }

    const leftTree = new BIT();
    const left = new Array(n);
    for (let i = 0; i < n; i++) {
        left[i] = leftTree.query(transformed[i] - 1);
        leftTree.update(transformed[i], 1);
    }

    const rightTree = new BIT();
    const right = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        right[i] = rightTree.query(n - 1) - rightTree.query(transformed[i]);
        rightTree.update(transformed[i], 1);
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        result += left[i] * right[i];
    }
    return result;
};
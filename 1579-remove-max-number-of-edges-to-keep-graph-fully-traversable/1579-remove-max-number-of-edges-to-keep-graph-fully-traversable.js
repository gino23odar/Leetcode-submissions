class UnionFind {
    constructor(n){
        this._groups = [];
        for (let i = 1; i <= n; i++)
            this._groups[i] = i;
    }

    copy(){
        const uf = new UnionFind();
        uf._groups = this._groups.slice();
        return uf;
    }

    countGroups(){
        let groups = new Set();
        for (let i = 1; i < this._groups.length; i++)
            groups.add(this.find(i));
        return groups.size;
    }
    find(a){
        const ga = this._groups[a];
        if (ga === a) return a;
        return this._groups[a] = this.find(ga);
    }
    union(a, b){
        const ga = this.find(a);
        const gb = this.find(b);
        if (Math.random() < 0.5)  this._groups[ga] = gb;
        else this._groups[gb] = ga;
    }
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    const uf = new UnionFind(n);
    let count = 0;
    for (let [type, a, b] of edges) {
        if (type !== 3) continue;
        if (uf.find(a) !== uf.find(b)) uf.union(a, b);
        else count++;
    }
    const auf = uf.copy();
    for (let [type, a, b] of edges) {
        if (type !== 1) continue;
        if (auf.find(a) !== auf.find(b)) auf.union(a, b);
        else count++;
    }
    if (auf.countGroups() > 1) return -1;
    const buf = uf.copy();
    for (let [type, a, b] of edges) {
        if (type !== 2) continue;
        if (buf.find(a) !== buf.find(b)) buf.union(a, b);
        else count++;
    }
    if (buf.countGroups() > 1) return -1;
    return count;
};
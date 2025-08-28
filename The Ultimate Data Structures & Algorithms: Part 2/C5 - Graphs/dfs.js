var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DFS = /** @class */ (function () {
    function DFS() {
        this.adjacencyList = new Map();
    }
    DFS.prototype.addNode = function (node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    };
    DFS.prototype.addEdge = function (node1, node2) {
        if (!this.adjacencyList.has(node1))
            this.addNode(node1);
        if (!this.adjacencyList.has(node2))
            this.addNode(node2);
        this.adjacencyList.get(node1).push(node2);
        this.adjacencyList.get(node2).push(node1); // undirected
    };
    // DFS Recursive
    DFS.prototype.dts = function (start, visited) {
        var e_1, _a;
        if (visited === void 0) { visited = new Set(); }
        if (visited.has(start))
            return;
        visited.add(start);
        console.log(start);
        try {
            for (var _b = __values(this.adjacencyList.get(start) || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                var neighbor = _c.value;
                this.dts(neighbor, visited);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return DFS;
}());
// Example usage
var graph = new DFS();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
console.log("DFS Traversal:");
graph.dts("A");

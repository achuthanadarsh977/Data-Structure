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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = new Map();
    }
    // Add a node
    Graph.prototype.addNode = function (node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    };
    // Add an edge (undirected for now)
    Graph.prototype.addEdge = function (node1, node2) {
        if (!this.adjacencyList.has(node1))
            this.addNode(node1);
        if (!this.adjacencyList.has(node2))
            this.addNode(node2);
        this.adjacencyList.get(node1).push(node2);
        this.adjacencyList.get(node2).push(node1); // remove for directed graph
    };
    // Print adjacency list
    Graph.prototype.print = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.adjacencyList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), node = _d[0], neighbors = _d[1];
                console.log(node, "->", neighbors.join(", "));
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
    return Graph;
}());
// ---------- Example Usage ----------
var graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.print();

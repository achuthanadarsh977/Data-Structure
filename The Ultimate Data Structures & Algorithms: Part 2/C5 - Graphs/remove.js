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
    // Remove a node
    Graph.prototype.removeNode = function (node) {
        var e_1, _a;
        if (!this.adjacencyList.has(node))
            return;
        try {
            // Step 1: Remove this node from other adjacency lists
            for (var _b = __values(this.adjacencyList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], neighbors = _d[1];
                this.adjacencyList.set(key, neighbors.filter(function (n) { return n !== node; }));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Step 2: Remove the node itself
        this.adjacencyList.delete(node);
    };
    // Remove an edge
    Graph.prototype.removeEdge = function (node1, node2) {
        if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2))
            return;
        this.adjacencyList.set(node1, this.adjacencyList.get(node1).filter(function (n) { return n !== node2; }));
        this.adjacencyList.set(node2, this.adjacencyList.get(node2).filter(function (n) { return n !== node1; }));
    };
    // Print adjacency list
    Graph.prototype.print = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.adjacencyList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), node = _d[0], neighbors = _d[1];
                console.log(node, "->", neighbors.join(", "));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
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
console.log("Graph before removing:");
graph.print();
graph.removeNode("B");
console.log("\nGraph after removing B:");
graph.print();

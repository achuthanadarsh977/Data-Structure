
class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a node
    addNode(node: string): void {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }

    // Add an edge (undirected for now)
    addEdge(node1: string, node2: string): void {
        if (!this.adjacencyList.has(node1)) this.addNode(node1);
        if (!this.adjacencyList.has(node2)) this.addNode(node2);

        this.adjacencyList.get(node1)!.push(node2);
        this.adjacencyList.get(node2)!.push(node1); // remove for directed graph
    }

    // Print adjacency list
    print(): void {
        for (let [node, neighbors] of this.adjacencyList) {
            console.log(node, "->", neighbors.join(", "));
        }
    }
}

// ---------- Example Usage ----------
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

graph.print();

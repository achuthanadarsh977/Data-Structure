
class remove {
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

    // Remove a node
    removeNode(node: string): void {
        if (!this.adjacencyList.has(node)) return;

        // Step 1: Remove this node from other adjacency lists
        for (let [key, neighbors] of this.adjacencyList) {
            this.adjacencyList.set(
                key,
                neighbors.filter(n => n !== node)
            );
        }

        // Step 2: Remove the node itself
        this.adjacencyList.delete(node);
    }

    // Remove an edge
    removeEdge(node1: string, node2: string): void {
        if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) return;

        this.adjacencyList.set(
            node1,
            this.adjacencyList.get(node1)!.filter(n => n !== node2)
        );

        this.adjacencyList.set(
            node2,
            this.adjacencyList.get(node2)!.filter(n => n !== node1)
        );
    }

    // Print adjacency list
    print(): void {
        for (let [node, neighbors] of this.adjacencyList) {
            console.log(node, "->", neighbors.join(", "));
        }
    }
}

// ---------- Example Usage ----------
const rem = new remove();
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

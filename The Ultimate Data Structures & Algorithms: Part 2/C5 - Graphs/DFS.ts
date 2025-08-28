class DFS {
    private adjacencyList: Map<string, string[]> = new Map();

    addNode(node: string): void {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }

    addEdge(node1: string, node2: string): void {
        if (!this.adjacencyList.has(node1)) this.addNode(node1);
        if (!this.adjacencyList.has(node2)) this.addNode(node2);

        this.adjacencyList.get(node1)!.push(node2);
        this.adjacencyList.get(node2)!.push(node1); // undirected
    }

    // DFS Recursive
    dts(start: string, visited = new Set<string>()) {
        if (visited.has(start)) return;
        visited.add(start);
        console.log(start);

        for (let neighbor of this.adjacencyList.get(start) || []) {
            this.dts(neighbor, visited);
        }
    }
}

// Example usage
const graph = new DFS();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log("DFS Traversal:");
graph.dts("A");

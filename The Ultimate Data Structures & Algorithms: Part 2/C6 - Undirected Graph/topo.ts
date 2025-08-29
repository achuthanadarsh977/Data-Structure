class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(u: number, v: number): void {
        if (!this.adjacencyList.has(u)) this.adjacencyList.set(u, []);
        this.adjacencyList.get(u)!.push(v);
    }

    private dfs(node: number, visited: Set<number>, stack: number[]): void {
        visited.add(node);

        for (let neighbor of this.adjacencyList.get(node) || []) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited, stack);
            }
        }

        stack.push(node); // push after visiting all neighbors
    }

    topologicalSort(): number[] {
        let visited = new Set<number>();
        let stack: number[] = [];

        for (let node of this.adjacencyList.keys()) {
            if (!visited.has(node)) {
                this.dfs(node, visited, stack);
            }
        }

        return stack.reverse(); // reverse to get correct order
    }
}

// ---------- Example Usage ----------
const g = new Graph();
g.addEdge(5, 0);
g.addEdge(5, 2);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

console.log("Topological Sort:", g.topologicalSort());

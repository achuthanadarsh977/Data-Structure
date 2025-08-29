class PriorityQueue<T> {
  private items: { node: T; priority: number }[] = [];

  enqueue(node: T, priority: number) {
    this.items.push({ node, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): T | undefined {
    return this.items.shift()?.node;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

class Graph {
  private adjacencyList: Map<string, { node: string; weight: number }[]> = new Map();

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(src: string, dest: string, weight: number) {
    this.adjacencyList.get(src)?.push({ node: dest, weight });
    this.adjacencyList.get(dest)?.push({ node: src, weight }); // undirected
  }

  dijkstra(start: string): Record<string, number> {
    const distances: Record<string, number> = {};
    const pq = new PriorityQueue<string>();

    // initialize distances
    for (let vertex of this.adjacencyList.keys()) {
      distances[vertex] = Infinity;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
      let current = pq.dequeue()!;
      let neighbors = this.adjacencyList.get(current) || [];

      for (let { node, weight } of neighbors) {
        let newDist = distances[current] + weight;
        if (newDist < distances[node]) {
          distances[node] = newDist;
          pq.enqueue(node, newDist);
        }
      }
    }

    return distances;
  }
}

// Example usage
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B", 2);
g.addEdge("A", "C", 4);
g.addEdge("B", "C", 1);
g.addEdge("B", "D", 7);
g.addEdge("C", "D", 3);

console.log(g.dijkstra("A"));
// Output: { A: 0, B: 2, C: 3, D: 6 }

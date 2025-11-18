class SingleNode{
    data:number;
    next: SingleNode | null;
    
    constructor(data:number){
        this.data = data;
        this.next = null;
    }
}

const node1 = new SingleNode(1)
const node2 = new SingleNode(15)
const node3 = new SingleNode(3)
const node4 = new SingleNode(4)

node1.next = node2
node2.next = node3
node3.next = node4

let currentNode: SingleNode | null = node1;

while(currentNode){
    process.stdout.write(currentNode.data + " -> ");
    currentNode = currentNode.next
}
console.log("null")
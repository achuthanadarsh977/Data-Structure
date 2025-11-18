var SingleNode = /** @class */ (function () {
    function SingleNode(data) {
        this.data = data;
        this.next = null;
    }
    return SingleNode;
}());
var node1 = new SingleNode(1);
var node2 = new SingleNode(15);
var node3 = new SingleNode(3);
var node4 = new SingleNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
var currentNode = node1;
while (currentNode) {
    process.stdout.write(currentNode.data + " -> ");
    currentNode = currentNode.next;
}
console.log("null");

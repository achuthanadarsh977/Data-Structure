var DoubleNode = /** @class */ (function () {
    function DoubleNode(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    return DoubleNode;
}());
var node1 = new DoubleNode(23);
var node2 = new DoubleNode(24);
var node3 = new DoubleNode(25);
var node4 = new DoubleNode(12);
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
console.log("\nTraversing forward");
var currentnode = node1;
while (currentnode) {
    process.stdout.write(currentnode.data + ',');
    currentnode = currentnode.next;
}
console.log('null');
console.log("\nTraversing backward");
var curnode = node4;
while (curnode) {
    process.stdout.write(curnode.data + ",");
    curnode = curnode.prev;
}
console.log('null');

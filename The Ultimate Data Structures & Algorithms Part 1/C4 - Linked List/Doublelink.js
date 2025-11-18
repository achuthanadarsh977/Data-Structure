var DoubleLink = /** @class */ (function () {
    function DoubleLink(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    return DoubleLink;
}());
var node = new DoubleLink(23);
var node1 = new DoubleLink(24);
var node2 = new DoubleLink(25);
node1.next = node2;
node1.prev = node;
console.log("Traversing forward");
var currentNode = node1;
while (currentNode) {
    process.stdout.write(currentNode.data + "=>");
    currentNode = currentNode.next;
}
console.log("null");
currentNode = node2;
while (currentNode) {
    process.stdout.write(currentNode.data + "=>");
    currentNode = currentNode.prev;
}
console.log("null");

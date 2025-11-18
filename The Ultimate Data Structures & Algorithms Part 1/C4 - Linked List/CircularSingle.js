var CircularSingle = /** @class */ (function () {
    function CircularSingle(data) {
        this.data = data;
        this.next = null;
    }
    return CircularSingle;
}());
var node1 = new CircularSingle(22);
var node2 = new CircularSingle(23);
var node3 = new CircularSingle(24);
var node4 = new CircularSingle(25);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;
var current1 = node1;
var start1 = node1;
process.stdout.write(current1.data + ',');
current1 = current1.next;
while (current1 !== start1) {
    process.stdout.write(current1.data + ',');
    current1 = current1.next;
}
console.log("...");

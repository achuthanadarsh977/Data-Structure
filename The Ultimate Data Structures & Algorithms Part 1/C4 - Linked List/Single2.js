var Single2 = /** @class */ (function () {
    function Single2(data) {
        this.data = data;
        this.next = null;
    }
    return Single2;
}());
var node1 = new Single2(12);
var node2 = new Single2(13);
node1.next = node2;
var current = node1;
while (current) {
    process.stdout.write(current.data + "->");
    current = current.next;
}
console.log("null");

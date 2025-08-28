var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.items = [];
    }
    PriorityQueue.prototype.size = function () {
        console.log(this.items.length);
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    PriorityQueue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    PriorityQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        }
        return this.items.shift();
    };
    PriorityQueue.prototype.peek = function () {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        }
        return this.items[0];
    };
    return PriorityQueue;
}());
var p = new PriorityQueue();
p.enqueue('a');
p.enqueue('b');
p.enqueue('c');
p.enqueue(1);
while (!p.isEmpty()) {
    console.log(p.dequeue());
}
p.enqueue('d');
p.enqueue('e');
p.enqueue('f');
p.enqueue('g');
console.log(p.peek());
console.log(p);

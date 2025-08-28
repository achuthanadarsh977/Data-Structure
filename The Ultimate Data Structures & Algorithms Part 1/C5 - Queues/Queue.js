var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        }
        return this.items.shift();
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        }
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    Queue.prototype.print = function () {
        console.log(this.items);
    };
    Queue.prototype.circular = function () {
        console.log(this.items.reverse());
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.isEmpty());
console.log(queue.size());
queue.print();
queue.circular();

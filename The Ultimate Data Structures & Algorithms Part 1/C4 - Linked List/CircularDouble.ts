class CircularDouble {
    data: number;
    prev: CircularDouble | null;
    next: CircularDouble | null;

    constructor(data: number) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

let node1 = new CircularDouble(23);
let node2 = new CircularDouble(24);
let node3 = new CircularDouble(25);
let node4 = new CircularDouble(26);

// ---- Correct Circular Links ----
node1.next = node2;
node1.prev = node4;

node2.next = node3;
node2.prev = node1;    // FIXED

node3.next = node4;
node3.prev = node2;

node4.next = node1;    // FIXED
node4.prev = node3;

// ---- Traversing Forward ----
console.log('\nTraversing Forward');

let current = node1;
let start = node1;

process.stdout.write(current.data + ',');
current = current.next;

while (current !== start) {
    process.stdout.write(current.data + ',');
    current = current.next;
}

console.log('...');


// ---- Traversing Backward ----
console.log('\nTraversing Backward');

current = node4;
start = node4;

process.stdout.write(current.data + ',');
current = current.prev;

while (current !== start) {
    process.stdout.write(current.data + ',');
    current = current.prev;
}

console.log('...');


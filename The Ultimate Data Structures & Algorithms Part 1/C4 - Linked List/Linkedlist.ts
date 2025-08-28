class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    private head: Node<T> | null = null;

    addFirst(item: T): void {
        const newNode = new Node(item);
        newNode.next = this.head;
        this.head = newNode;
    }

    print(): void {
        let current = this.head;
        const values: T[] = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}

// ✅ Usage
let list = new LinkedList<number>();
list.addFirst(10);
list.addFirst(20);
list.addFirst(30);

list.print(); // 30 -> 20 -> 10

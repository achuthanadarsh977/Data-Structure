class Linked2 {
    private items: number[] = [];

    addFirst(item: number): void {
        this.items.unshift(item);
    }

    print(): void {
        console.log(this.items);
    }
}

// ✅ Usage
const list = new Linked2();
list.addFirst(10);
list.addFirst(20);
list.print(); // [20, 10]

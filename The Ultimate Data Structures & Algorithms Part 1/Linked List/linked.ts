class MyList<T> {
    private items: T[] = [];

    addFirst(item: T): void {
        this.items.unshift(item); // inserts at the beginning
    }

    getItems(): T[] {
        return this.items;
    }
}

// ✅ Usage
let list = new MyList<number>();
list.addFirst(10);
list.addFirst(20);

console.log(list.getItems()); // [20, 10]

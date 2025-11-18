

class Single<T>{
    value:T;
    next:Single<T> | null = null

    constructor(value:T){
        this.value = value
    }
}


let node1 = new Single(10)
let node2 = new Single(20)
let node3 = new Single(30)
node1.next = node2
node2.next = node3



class DoubleNode{
    data:number
    prev : DoubleNode | null
    next : DoubleNode | null

    constructor(data:number){
        this.data = data
        this.prev = null
        this.next = null
    }
}

let node1 = new DoubleNode(23)

let node2 = new DoubleNode(24)
let node3 = new DoubleNode(25)

let node4 = new DoubleNode(12)

node1.next = node2
node2.prev = node1

node2.next = node3
node3.prev = node2

node3.next = node4
node4.prev = node3

console.log("\nTraversing forward")

let currentnode : DoubleNode | null = node1

while(currentnode){
    process.stdout.write(currentnode.data + ',')
    currentnode = currentnode.next
}

console.log('null')


console.log("\nTraversing backward")
let curnode : DoubleNode | null = node4
while(curnode){
    process.stdout.write(curnode.data + ",")
    curnode = curnode.prev
}

console.log('null')

class DoubleLink{
    data:number;
    next:DoubleLink | null;
    prev:DoubleLink | null;

    constructor(data:number){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

const node = new DoubleLink(23)
const node1 =  new DoubleLink(24) 

const node2 = new DoubleLink(25)


node1.next = node2
node1.prev = node


console.log("Traversing forward")

let currentNode : DoubleLink | null =  node1;

while(currentNode){
    process.stdout.write(currentNode.data+"=>")
    currentNode = currentNode.next
}
console.log("null")



currentNode = node2
while(currentNode){
    process.stdout.write(currentNode.data+"=>")
    currentNode = currentNode.prev
}
console.log("null")


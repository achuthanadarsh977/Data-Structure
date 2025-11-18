
class CircularSingle{
    data:number
    next: CircularSingle | null

    constructor(data:number){
        this.data = data
        this.next = null
    }
}

let node1 = new CircularSingle(22)
let node2 = new CircularSingle(23)
let node3 = new CircularSingle(24)
let node4 = new CircularSingle(25)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node1

let current1 : CircularSingle | null = node1
let start1 : CircularSingle | null = node1


process.stdout.write(current1.data + ',')
current1 = current1.next

while(current1 !== start1){
   process.stdout.write(current1.data + ',')
   current1 = current1.next
}


console.log("...")
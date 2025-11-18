

class Single2{
    data:number;
    next: Single2 | null

    constructor(data:number){
        this.data = data
        this.next = null
    }
}




let node1 = new Single2(12)
let node2 = new Single2(13)


node1.next = node2



let current : Single2 | null = node1

while(current){
    process.stdout.write(current.data + "->")
    current = current.next
}

console.log("null")



class Single<T>{
    value:T;
    next:Single<T> | null = null

    constructor(value:T){
        this.value = value
    }
}


class Singlelist<T>{
    head:Single<T> | null = null;

    append(value:T):void{
        const newNode = new Single(value);
        if(!this.head){
            this.head = newNode
            return;
        }

        let current = this.head
        while(current.next){
            current = current.next
        }
        
        current.next = newNode
        
    }

    prepend(value:T):void{
        const newNode = new Single(value)
        newNode.next = this.head
        this.head = newNode
    }

    delete(value:T):void{
        if(!this.head){
            return;
        }

        if(this.head.value === value){
            this.head = this.head.next
            return;
        }

        let current = this.head
        while(current.next && current.next.value !== value){
            current = current.next
        }

        if(current.next){
            current.next = current.next.next
        }
    }

    print():void{
        let current = this.head
        let listValues = ""

        while(current){
            listValues+=current.value+"->"
            current = current.next
        }

        listValues+=null
        console.log(listValues)
    }
}

let single1 = new Single(10)
let single2 = new Single(20)
let single3 = new Single(30)
single1.next = single2
single2.next = single3

const list = new Singlelist<number>()
list.append(10)
list.append(20)
list.append(30)
list.prepend(5)

list.print()
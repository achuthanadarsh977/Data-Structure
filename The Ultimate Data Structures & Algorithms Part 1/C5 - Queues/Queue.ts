

class Queue<T>{


    private items: T[] = [];

    enqueue(item:T):void{
        this.items.push(item)
    }

    dequeue(): T | undefined{
        if(this.isEmpty()){
            console.log('Queue is empty')
        }
        return this.items.shift()
        
    }

    peek(): T | undefined{
         if(this.isEmpty()){
            console.log('Queue is empty')
        }
        return this.items[0]
    }

    isEmpty():boolean{
        return this.items.length === 0
    }

    size():number{
       return this.items.length
    }

    print():void{
        console.log(this.items)
    }

    circular():void{
        console.log(this.items.reverse())
    }
}

const queue = new Queue<number>();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.isEmpty())
console.log(queue.size())
queue.print()
queue.circular()





class PriorityQueue<T>{

    private items:T[] = []

    size():void{
        console.log(this.items.length)
    }

    isEmpty():boolean{
        return this.items.length === 0

    }

    enqueue(item:T):void{
        this.items.push(item)
    }

    dequeue():T | undefined{

        if(this.isEmpty()){
            console.log('Queue is empty')
        }
        return this.items.shift()
    }

    peek(): T| undefined {
        
        if(this.isEmpty()){
            console.log('Queue is empty')
        }
        return this.items[0]
        
    }


}

const p =new PriorityQueue<any>();
p.enqueue('a')
p.enqueue('b')
p.enqueue('c')
p.enqueue(1)

while(!p.isEmpty()){
    console.log(p.dequeue())
}
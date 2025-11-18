class Double<T>{
    value:T;
    prev:Single<T> | null = null
    next:Single<T> | null = null

    constructor(value:T){
        this.value = value
    }
}


class DoubleList<T>{
    head:Double<T> | null = null
    tail:Double<T> | null = null


    append(value:T):void{
        const newNode = new Double(value)
        if(!this.head){
            this.head = this.tail = newNode;
            return;
        }

        let current = this.head
    }
}



class Stack{

    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            console.log('Stack is empty');
        }

        return this.items;
    }

    peek(){
        if(this.isEmpty()){
            console.log('Stack is empty');
        }
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items)
    }

    

}

const st = new Stack();
st.push(10)
st.push(20)
st.push(30)

console.log(st.pop())
console.log(st.peek())

console.log(st.isEmpty())



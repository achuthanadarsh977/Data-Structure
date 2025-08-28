
// class Recursion{
//     value : number;
//     ch
// }




// function factorial(n:number):number{
//     if (n === 0){
//         return 1
//     }

//     else{
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(5))


class Recursion{
    value : number
    children : Recursion[] = [];
    constructor(value:number){
        this.value = value
    }
}

function traverse(node : Recursion | null):void{
    if(!node) return;
    console.log(node.value);
    for(let child of node.children){
        traverse(child)
    }

}




const root = new Recursion(3);
const a = new Recursion(6);
const b = new Recursion(9);
const c = new Recursion(12);
const d = new Recursion(15);
root.children.push(a,b,c)
b.children.push(c,d)
traverse(root)
console.log(root)
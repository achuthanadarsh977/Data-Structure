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
var Recursion = /** @class */ (function () {
    function Recursion(value) {
        this.children = [];
        this.value = value;
    }
    return Recursion;
}());
function traverse(node) {
    if (!node)
        return;
    console.log(node.value);
    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
        var child = _a[_i];
        traverse(child);
    }
}
var root = new Recursion(3);
var a = new Recursion(6);
var b = new Recursion(9);
var c = new Recursion(12);
var d = new Recursion(15);
root.children.push(a, b, c);
b.children.push(c, d);
traverse(root);
console.log(root);

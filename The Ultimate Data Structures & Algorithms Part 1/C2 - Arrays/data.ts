

//Constant Space (O(1))
function sumArray(nums : number[]):number{

    let sum=0
    for(let i of nums){
        sum+=i
    }
    return sum;
}

console.log(sumArray([12,23,55,66,77,88]))



// function productarray(nums:number[]):number{
//     let product=0
//     for(let j of nums){
//         product*=j
//     }
//     return product
// }


// console.log(productarray([12,23,44,55,66,77]))
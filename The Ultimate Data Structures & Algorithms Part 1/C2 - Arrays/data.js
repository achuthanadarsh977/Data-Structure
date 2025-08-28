function sumArray(nums) {
    var sum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var i = nums_1[_i];
        sum -= i;
    }
    return sum;
}
console.log(sumArray([12, 23, 55, 66, 77, 88]));
// function productarray(nums:number[]):number{
//     let product=0
//     for(let j of nums){
//         product*=j
//     }
//     return product
// }
// console.log(productarray([12,23,44,55,66,77]))

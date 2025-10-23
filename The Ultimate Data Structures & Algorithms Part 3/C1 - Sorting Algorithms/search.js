// function linear_search(arr:number[],target:number){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }
// const lin = linear_search([1,2,3,4,5,6],5)
// console.log(lin)
// function binary_search(arr:number[], target:number){
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid] === target){
//             return mid
//         }
//         else if(arr[mid] < target){
//             left = mid + 1
//         }
//         else{
//             right = mid - 1
//         }
//     }
//     return -1
// }
// const bin = binary_search([1,2,3,4,56,67],4)
// console.log(bin)
// function ternary_search(arr:number[] , target:number){
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//     }
// }
// function bubblesort(arr:number[]):number[]{
//     let n = arr.length
//     for(let i=0;i<n-i;i++){
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// const b = [5,2,1,9,6]
// console.log(bubblesort(b))
// function selectionsort(arr:number[]):number[]{
//      const n = arr.length
//      for(let i=0;i<n-1;i++){
//         let minindex = i
//         for(let j=i+1;j<n;j++){
//             if(arr[j] < arr[minindex]){
//                 minindex = j
//             }
//         }
//         [arr[i],arr[minindex]] = [arr[minindex],arr[i]]
//      }
//      return arr
// }
// const a = [5,2,1,9,6]
// console.log(selectionsort(a))
function mergesort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var mid = Math.floor((arr.length) / 2);
    var left = mergesort(arr.slice(0, mid));
    var right = mergesort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    var result = [];
    var i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        }
        else {
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergesort([5, 2, 1, 9, 6]));

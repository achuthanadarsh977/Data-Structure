// Online Typescript Editor for free
// Write, Edit and Run your Typescript code using TS Online Compiler



// function binarySearch(arr:number[] , target:number):number{
    
//     let low = 0
//     let high = arr.length - 1
    
//     while(high > low){
//         let mid = low + (Math.floor((low+high)/2))
        
        
//         if(arr[mid] === target){
//             return mid
//         }
        
//         if(arr[mid] > target){
//             high = mid - 1
//         }
        
//         else{
//             low = mid+1
//         }
//     }
    
//     return -1
// }

// console.log(binarySearch([1,23,43,10,22],43))


// function ternarysearch(arr:number[]):number{
//     let low = 0
//     let high = arr.length - 1
//     let minindex = -1 
    
//     while(high >= low){
//         let mid1 = low + Math.floor((high-low)/3)
//         let mid2 = high - Math.floor((high-low)/3)
        
//         if(arr[mid1] === arr[mid2]){
//             low = mid1+1
//             high = mid2-1
            
//             minindex = mid1
//         }
        
        
//         else if(arr[mid1] < arr[mid2]){
//              high = mid2-1
             
//              minindex = mid2
//         }
        
//         else{
//             low = mid1 + 1
//             minindex = mid1
//         }
//     }
    
//     return minindex
// }

// console.log(ternarysearch([10,20,40,70,80]))
        
        
        
// function linearSearch(arr:number[] , target:number):number{
    
    
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
    
//     return -1
// }

// console.log(linearSearch([10,30,40,20,50],40))
        

// function twosum(arr:number[],target:number):boolean{
//     let n = arr.length
    
//     for(let i=0;i<n;i++){
//         for(let j=i+1;j<n;j++){
//             if(arr[i] + arr[j] === target){
//                 return true
//             }
//         }
//     }
//     return false
// }

// if(twosum([12,34,56,23,56],-2)){
//     console.log("true")
// }

// else{
//     console.log("false")
// }

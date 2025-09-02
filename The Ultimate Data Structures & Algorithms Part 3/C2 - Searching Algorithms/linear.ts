


function LinearSearch(arr:number[] , target:number) {

    for(let i=0;i < arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }

    return -1
} 


let nums:number[] =[7,1,4,3,5];
let target = 4;
const index = LinearSearch(nums,target) 
console.log(index)

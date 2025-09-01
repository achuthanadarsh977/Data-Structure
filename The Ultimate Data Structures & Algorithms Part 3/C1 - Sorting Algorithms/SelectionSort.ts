


function swap(merge : number[] , index1 : number , index2 : number):number[]{

    let temp = merge[index1]
    merge[index1] = merge[index2]
    merge[index2] = temp

    return merge

}


function SelectionSort(selection: number[]): number[]{

    for(let i=0;i<selection.length;i++){
        let minIndex = i
        for(let j=i+1;j<selection.length;j++){
            if(selection[j] < selection[minIndex]){
                minIndex = j
            }

        }
        return swap(selection,i,minIndex)
    }
   
    return selection

}

console.log("Swapped values:"+swap([12,100,99,67,117,88,99],0,6))
console.log("Selection sort:"+SelectionSort([12,100,99,67,117,88,99]))

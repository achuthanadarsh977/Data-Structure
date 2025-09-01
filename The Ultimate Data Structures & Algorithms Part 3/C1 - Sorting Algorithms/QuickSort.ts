function QuickSort(array: number[], start: number, end: number): number[] {
    if (start < end) {
        let pivotIndex = partition(array, start, end);
        QuickSort(array, start, pivotIndex - 1);  // left side
        QuickSort(array, pivotIndex + 1, end);    // right side
    }
    return array;
}

function partition(array: number[], start: number, end: number): number {
    let pivot = array[end];   // pivot is the last element
    let boundary = start - 1;

    for (let i = start; i <= end; i++) {
        if (array[i] <= pivot) {
            swap(array, i, ++boundary);
        }
    }
    return boundary;  // pivot index
}


function swap(merge : number[] , index1 : number , index2 : number):number[]{

    let temp = merge[index1]
    merge[index1] = merge[index2]
    merge[index2] = temp

    return merge

}

let arr = [10,1,3,14,17,4,20,24]
console.log('Original array:'+arr)
console.log('New Array:'+QuickSort(arr,0,arr.length-1))
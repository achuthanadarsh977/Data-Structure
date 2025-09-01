function QuickSort(array, start, end) {
    if (start < end) {
        var pivotIndex = partition(array, start, end);
        QuickSort(array, start, pivotIndex - 1); // left side
        QuickSort(array, pivotIndex + 1, end); // right side
    }
    return array;
}
function partition(array, start, end) {
    var pivot = array[end]; // pivot is the last element
    var boundary = start - 1;
    for (var i = start; i <= end; i++) {
        if (array[i] <= pivot) {
            swap(array, i, ++boundary);
        }
    }
    return boundary; // pivot index
}
function swap(merge, index1, index2) {
    var temp = merge[index1];
    merge[index1] = merge[index2];
    merge[index2] = temp;
    return merge;
}
var arr = [10, 1, 3, 14, 17, 4, 20, 24];
console.log('Original array:' + arr);
console.log('New Array:' + QuickSort(arr, 0, arr.length - 1));

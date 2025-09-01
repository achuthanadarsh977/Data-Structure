function swap(merge, index1, index2) {
    var temp = merge[index1];
    merge[index1] = merge[index2];
    merge[index2] = temp;
    return merge;
}
function SelectionSort(selection) {
    for (var i = 0; i < selection.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < selection.length; j++) {
            if (selection[j] < selection[minIndex]) {
                minIndex = j;
            }
        }
        return swap(selection, i, minIndex);
    }
    return selection;
}
console.log("Swapped values:" + swap([12, 100, 99, 67, 117, 88, 99], 0, 6));
console.log("Selection sort:" + SelectionSort([12, 100, 99, 67, 117, 88, 99]));

function BubbleSort(bubble) {
    for (var i = 0; i < bubble.length; i++) {
        for (var j = 0; j < bubble.length; j++) {
            if (bubble[j] < bubble[j - 1]) {
                var temp = bubble[i];
                bubble[j] = bubble[j - 1];
                bubble[j - 1] = temp;
            }
        }
    }
    return bubble;
}
function swap(merge, index1, index2) {
    var temp = merge[index1];
    merge[index1] = merge[index2];
    merge[index2] = temp;
    return merge;
}
console.log(BubbleSort([34, 45, 56, 100, 101, 102, 10, 12, 34, 45, 67, 12]));
console.log(swap([45, 45, 10, 10, 12, 30, 34, 45, 10, 20, 30, 76], 10, 20));

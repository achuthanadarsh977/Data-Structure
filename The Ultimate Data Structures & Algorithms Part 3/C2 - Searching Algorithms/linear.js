function LinearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
var nums = [7, 1, 4, 3, 5];
var target = 4;
var index = LinearSearch(nums, target);
console.log(index);

function ternary(arr, target, left, right) {
    // Base case: if range becomes invalid
    if (left > right) {
        return -1; // target not found
    }
    var partitionSize = Math.floor((right - left) / 3);
    var mid1 = left + partitionSize;
    var mid2 = right - partitionSize;
    // Check the midpoints
    if (arr[mid1] === target) {
        return mid1;
    }
    if (arr[mid2] === target) {
        return mid2;
    }
    // Decide which segment to search
    if (target < arr[mid1]) {
        return ternary(arr, target, left, mid1 - 1);
    }
    if (target > arr[mid2]) {
        return ternary(arr, target, mid2 + 1, right);
    }
    // Target lies between mid1 and mid2
    return ternary(arr, target, mid1 + 1, mid2 - 1);
}
// Example usage
var arr1 = [2, 5, 7, 10, 14, 18, 20];
var tero = 14;
var result = ternary(arr1, tero, 0, arr1.length - 1);
if (result !== -1) {
    console.log("Element ".concat(tero, " found at index ").concat(result));
}
else {
    console.log("Element ".concat(tero, " not found"));
}

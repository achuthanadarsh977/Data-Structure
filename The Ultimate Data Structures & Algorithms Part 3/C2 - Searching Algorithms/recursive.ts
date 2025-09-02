function binarySearchRecursive(arr: number[], target: number, left: number, right: number): number {
    if (left > right) {
        return -1; // not found
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, left, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
}

// Example usage
let arr2 = [1, 2, 3, 4, 7, 8]; // must be sorted
console.log("Recursive:", binarySearchRecursive(arr2, 4, 0, arr2.length - 1));

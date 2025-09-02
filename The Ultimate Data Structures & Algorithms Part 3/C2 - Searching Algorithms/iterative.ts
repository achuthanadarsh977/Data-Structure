function binarySearchIterative(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1; // not found
}

// Example usage
let arr3 = [1, 2, 3, 4, 7, 8]; // must be sorted
console.log("Iterative:", binarySearchIterative(arr3, 4));

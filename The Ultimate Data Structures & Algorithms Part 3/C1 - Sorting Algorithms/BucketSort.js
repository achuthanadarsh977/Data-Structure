function bucketSort(array) {
    var _a;
    if (array.length === 0)
        return array;
    // 1. Find max value
    var max = Math.max.apply(Math, array);
    // 2. Create buckets
    var numberOfBuckets = Math.floor(Math.sqrt(array.length)); // heuristic
    var buckets = Array.from({ length: numberOfBuckets }, function () { return []; });
    // 3. Distribute into buckets
    for (var i = 0; i < array.length; i++) {
        var index = Math.floor((array[i] / (max + 1)) * numberOfBuckets);
        buckets[index].push(array[i]);
    }
    // 4. Sort each bucket (using insertion sort here)
    function insertionSort(arr) {
        for (var i = 1; i < arr.length; i++) {
            var key = arr[i];
            var j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr;
    }
    for (var i = 0; i < buckets.length; i++) {
        buckets[i] = insertionSort(buckets[i]);
    }
    // 5. Concatenate all
    return (_a = []).concat.apply(_a, buckets);
}
// 🔹 Example
var arr = [42, 32, 33, 52, 37, 47, 51];
console.log("Original:", arr);
console.log("Bucket Sort:", bucketSort(arr));


function bucketSort(array: number[]): number[] {
  if (array.length === 0) return array;

  // 1. Find max value
  const max = Math.max(...array);

  // 2. Create buckets
  const numberOfBuckets = Math.floor(Math.sqrt(array.length)); // heuristic
  const buckets: number[][] = Array.from({ length: numberOfBuckets }, () => []);

  // 3. Distribute into buckets
  for (let i = 0; i < array.length; i++) {
    const index = Math.floor((array[i] / (max + 1)) * numberOfBuckets);
    buckets[index].push(array[i]);
  }

  // 4. Sort each bucket (using insertion sort here)
  function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = insertionSort(buckets[i]);
  }

  // 5. Concatenate all
  return ([] as number[]).concat(...buckets);
}

// 🔹 Example
const arr = [42, 32, 33, 52, 37, 47, 51];
console.log("Original:", arr);
console.log("Bucket Sort:", bucketSort(arr));

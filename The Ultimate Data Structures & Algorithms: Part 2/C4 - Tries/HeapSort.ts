
class HeapSort{

    public sort(arr : number[]){
        const size = arr.length;

      //Build max heap
        for(let i=Math.floor(size/2)-1;i>=0;i--){
            this.heapify(arr,size,i)
        }

        //Extract element from heap
        for(let j=size - 1;j >= 1;j--){
            this.swap(arr,0,j);
            this.heapify(arr,j,0)
        }
    }

    private heapify(arr:number[] , size:number , i:number){
        let largest = i
        let left  = 2*i + 1
        let right = 2*i + 2

        if(left < size &&  arr[left] > arr[largest]){
            largest = left
        } 

        if(right < size && arr[right] > arr[largest]){
            largest = right
        }

        if(largest !== i){
            this.swap(arr,i,largest)
            this.swap(arr,size,largest);
        }
    }

    private removeRoot(arr: number[], size: number): number {
         const root = arr[0];                  // Store the root value
         arr[0] = arr[size - 1];               // Move last element to root
         // Effectively 'remove' last element by reducing size
         this.heapify(arr, size - 1, 0);       // Restore heap property
         return root;                          // Return removed root
     }


    private swap(arr:number[],a:number,b:number){
        const tmp = arr[a]
        arr[a] = arr[b]
        arr[b] = tmp

    }
}

let h1 = [3,5,1,4,2]
const heap = new HeapSort();

heap.sort(h1)

console.log(h1)

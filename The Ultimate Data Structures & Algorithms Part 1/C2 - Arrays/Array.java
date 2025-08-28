

class Array{
    public static void main(String[] args) {
        int[] arr ={101,10,12,33,44,55,66,77};

        int max = arr[0];
        int min = arr[0];

        for (int i = 0; i < arr.length; i++) {

            if (min > arr[i]){
                min = arr[i];
            }

            else if(max < arr[i]){
                max = arr[i];
            }
            
        }

       System.out.println("Maximum element:"+max);
       System.out.println("Minimum element:"+min);


    }
}
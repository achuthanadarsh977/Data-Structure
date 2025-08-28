
import java.util.ArrayList;

public class AList {

    public static void main(String[] args) {
        
        ArrayList<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(30);
        list.add(0,17);
        list.remove(0);
        System.err.println(list);


    }
    
}



import java.util.*;

public class Hash{
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        String s1 = s.next();
        String s2 = s.next();
        String s3 = s.next();

        System.out.println("Hashcode of s1:"+s1.hashCode());
        System.out.println("Hashcode of s2:"+s2.hashCode());
        System.out.println("Hashcode of s3:"+s3.hashCode());
        System.out.println(s1.equals(s3));

    }
}
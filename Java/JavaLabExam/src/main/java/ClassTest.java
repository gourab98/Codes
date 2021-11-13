import java.util.*;
import java.util.ArrayList;

public class ClassTest {

        List<String> listing = new ArrayList<>();
        ClassTest(){
            for(int i=0;i<50;i++) {
                listing.add("17 Batch");
            }
        }

        public int getSize() {
            return listing.size();
        }

        public String getValue(int n){
            return listing.get(n);
        }

}


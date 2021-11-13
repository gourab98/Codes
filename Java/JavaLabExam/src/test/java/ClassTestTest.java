import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

class ClassTestTest {
    static ClassTest test;
    private static int listlen = 0;

    @BeforeAll
    @DisplayName("INVOKE BEFORE ALL TEST CASE")
    public static void beforeAll(){
        test = new ClassTest();
        listlen = test.getSize();
        System.out.println("Before all test case.");
    }


    @AfterEach
    @DisplayName("INVOKE AFTER EACH TEST CASE")
    public void afterEach(){
        System.out.println("After each test case finished.");
    }

   @Test
   @DisplayName("Testing The list")
   public void testingList(){
        assertEquals(test.getValue(((int)Math.random())%listlen),"18 Batch");
        assertEquals(test.getValue(((int)Math.random())%listlen),"17 Batch");
       for(int i=0; i<listlen; i++){
           assertEquals(test.getValue(i), "17 Batch");
       }
    }


    @ParameterizedTest
    @ValueSource(strings = {"17 Batch","18 Batch", "19 Batch","17 Batch"})
    void parameterTest(String name){
        for(int i=0; i<listlen; i++){
            assertEquals(test.getValue(i), name);
        }
    }

    @ParameterizedTest
    @CsvSource(value = {"17 Batch","18 Batch","17 Batch"})
    void parameterTestCSV(String name){
        for(int i=0; i<listlen; i++){
            assertEquals(test.getValue(i), name);
        }
    }

    @Test
    @DisplayName("Is Array is Valid")
    public void testProgram(){
        assertFalse(test.listing.isEmpty());
        assertNotNull(test);
        assertEquals(listlen,test.getSize());
    }

}
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ContactManagerTest {

    @Test
    @DisplayName("Should Create Contact")
    public void shouldCreateContact(){
        ContactManager contactManager = new ContactManager();
        contactManager.addContact("Gourab","Saha","01754945840");
        Assertions.assertFalse(contactManager.getAllContacts().isEmpty());
        Assertions.assertEquals(1, contactManager.getAllContacts().size());
        Assertions.assertTrue(contactManager.getAllContacts().stream()
                    .filter(contact -> contact.getFirstName().equals("Gourab")&&
                            contact.getLastName().equals("Saha")&&
                            contact.getPhoneNumber().equals("01754945840"))
                    .findAny()
                    .isPresent());
    }

    @Test
    @DisplayName("Should Not Create Contact When First Name is Null")
    public void throwRuntimeExceptionWhenFirstNameIsNULL(){
        ContactManager contactManager =new ContactManager();
        Assertions.assertThrows(RuntimeException.class,() -> {
           contactManager.addContact(null,"Saha","01754945840");
        });
    }

    @BeforeAll
    @DisplayName("Before All")
    public static void beforeAll(){
        System.out.println("I am the first!!!");
    }

    @BeforeEach
    public void beforeEach(){
        System.out.println("Setuping...");
    }

    @AfterAll
    @DisplayName("After All")
    public static void afterAll(){
        System.out.println("I am the Last!!!");
    }

    @AfterEach
    public void afterEach(){
        System.out.println("Cleaning...");
    }

    @DisplayName("Repeat Contact Creation Test 5 Times")
    @RepeatedTest(value = 5)
    public void ShouldTestContactCreationRepeatedly(){
        ContactManager contactManager =new ContactManager();
        contactManager.addContact("Gourab", "Saha", "01754945840");
        Assertions.assertFalse(contactManager.getAllContacts().isEmpty());
        Assertions.assertEquals(1, contactManager.getAllContacts().size());
    }

    @Test
      void valueCheck(){
        int actual = 45;
        int expect = 45;
        assertEquals(actual,expect);
    }

    @Test
    void sameName(){
        String s = "Gourab";
        assertEquals("Gourab",s);
        assertNull(null);
    }

    @Test
    void arrayTest(){
        assertArrayEquals(new int[] {1,2,3,4},new int[] {1,2,2,4});
    }

    @ParameterizedTest
    @ValueSource(strings = {"a"," mmm","ab"," "})
    void parameterTest(String s){
        assertTrue(s.length()>0);
    }

    @ParameterizedTest
    @CsvSource(value = {"abc, ABC","abd, ABD","ac, AC"})
    void parameterTestCSV(String s, String cap){
        assertEquals(cap, s.toUpperCase());
    }

    @ParameterizedTest
    @MethodSource("phoneNumberList")
    public void shouldTestPhoneNumberFormatUsingMethodSource(String phoneNumber){
        ContactManager contactManager =new ContactManager();
        contactManager.addContact("Gourab", "Saha",phoneNumber);
        Assertions.assertFalse(contactManager.getAllContacts().isEmpty());
        Assertions.assertEquals(1, contactManager.getAllContacts().size());
    }

    private static List<String> phoneNumberList(){
        return Arrays.asList("01943739572","03546356483","");
    }

}
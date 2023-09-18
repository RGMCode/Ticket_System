package de.rgmcode.backend.User;

import jakarta.servlet.http.HttpSession;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.test.context.support.WithMockUser;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


public class UserControllerTest {

    @Test
    void testGetAllUsers() {
        // Given
        UserService userService = Mockito.mock(UserService.class);
        List<User> userList = new ArrayList<>();
        when(userService.getAllUsers()).thenReturn(userList);
        UserController userController = new UserController(userService);

        // When
        List<User> result = userController.getAllUsers();

        // Then
        assertNotNull(result);
        assertEquals(userList, result);
    }

    @Test
    void testGetMe1() {
        // Given
        Principal principal = mock(Principal.class);
        when(principal.getName()).thenReturn("TestUser");
        UserController userController = new UserController(null);

        // When
        String result = userController.getMe1(principal);

        // Then
        assertEquals("TestUser", result);
    }

    @Test
    void testGetMe2() {
        // Given
        SecurityContext securityContext = mock(SecurityContext.class);
        SecurityContextHolder.setContext(securityContext);
        Authentication authentication = mock(Authentication.class);
        when(authentication.getName()).thenReturn("TestUser");
        when(securityContext.getAuthentication()).thenReturn(authentication);
        UserController userController = new UserController(null);

        // When
        String result = userController.getMe2();

        // Then
        assertEquals("TestUser", result);
    }

    private User createUserWithLoginName(String userLoginName) {
        User user = new User(
                "1",                // id
                "uuid123",          // userUUID
                "2023-09-13",       // userRegistrationDate
                "10:00 AM",         // userRegistrationTime
                "Mr.",              // userTitle
                "Mr.",              // userSalutation
                "Doe",              // userLastName
                "John",             // userFirstName
                "IT",               // userDepartment
                "Location A",       // userLocation
                "Building 1",       // userBuilding
                "Room 101",         // userRoom
                "123-456-7890",     // userPhoneNumber
                "johndoe@email.com",// userEMail
                "userLoginName",      // userLoginName
                "password123",      // userPassword
                "User"              // userRole
        );
        user.setUserLoginName(userLoginName);
        return user;
    }

    @Test
    void testGetUserData() {
        // Given
        String userLoginName = "TestUser";
        User expectedUser = createUserWithLoginName(userLoginName);

        UserService userService = Mockito.mock(UserService.class);
        when(userService.getUserDataByLoginName(userLoginName)).thenReturn(Optional.of(expectedUser));

        UserController userController = new UserController(userService);

        // When
        Optional<User> result = userController.getUserData(userLoginName);

        // Then
        assertTrue(result.isPresent());
        User actualUser = result.get();
        assertEquals(userLoginName, actualUser.getUserLoginName());

        assertEquals(expectedUser.getId(), actualUser.getId());
    }

    @Test
    void testLogin() {
        // Given
        SecurityContext securityContext = mock(SecurityContext.class);
        SecurityContextHolder.setContext(securityContext);
        Authentication authentication = mock(Authentication.class);
        when(authentication.getName()).thenReturn("TestUser");
        when(securityContext.getAuthentication()).thenReturn(authentication);
        UserController userController = new UserController(null);

        // When
        String result = userController.login();

        // Then
        assertEquals("TestUser", result);
    }

    @Test
    @WithMockUser(username = "testuser", password = "password", roles = "USER")
    void testLogout() {
        // Given
        HttpSession httpSession = mock(HttpSession.class);
        UserController userController = new UserController(null);

        // When
        String result = userController.logout(httpSession);

        // Then
        assertEquals("logged out", result);

        verify(httpSession, times(1)).invalidate();
    }

    private UserService userService;
    private UserController userController;

    @BeforeEach
    void setUp() {
        userService = Mockito.mock(UserService.class);
        userController = new UserController(userService);
    }

    @Test
    public void test_add_new_user_with_unique_username_and_valid_values() {
        // Given
        User user = new User(
                "1",                // id
                "uuid123",          // userUUID
                "2023-09-13",       // userRegistrationDate
                "10:00 AM",         // userRegistrationTime
                "Mr.",              // userTitle
                "Mr.",              // userSalutation
                "Doe",              // userLastName
                "John",             // userFirstName
                "IT",               // userDepartment
                "Location A",       // userLocation
                "Building 1",       // userBuilding
                "Room 101",         // userRoom
                "123-456-7890",     // userPhoneNumber
                "johndoe@email.com",// userEMail
                "john.doe",         // userLoginName
                "password",         // userPassword
                "User"              // userRole
        );

        // Mock the behavior of userService
        when(userService.addNewUser(user)).thenReturn(user);

        // When
        String result = userController.addNewUser(user);

        // Then
        assertEquals("john.doe", result);
    }

}
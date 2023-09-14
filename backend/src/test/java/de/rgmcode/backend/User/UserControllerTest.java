package de.rgmcode.backend.User;
//

import jakarta.servlet.http.HttpSession;
import org.junit.jupiter.api.Test;
//
import static org.junit.jupiter.api.Assertions.*;


import org.mockito.Mockito;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.test.context.support.WithMockUser;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

public class UserControllerTest {

    @Test
    void testGetAllUsers() {
        // Mocking
        UserService userService = Mockito.mock(UserService.class);
        List<User> userList = new ArrayList<>();
        when(userService.getAllUsers()).thenReturn(userList);

        // Controller
        UserController userController = new UserController(userService);

        // Test
        List<User> result = userController.getAllUsers();
        assertNotNull(result);
        assertEquals(userList, result);
    }

    @Test
    void testGetMe1() {
        // Mocking
        Principal principal = mock(Principal.class);
        when(principal.getName()).thenReturn("TestUser");

        // Controller
        UserController userController = new UserController(null);

        // Test
        String result = userController.getMe1(principal);
        assertEquals("TestUser", result);
    }


    @Test
    void testGetMe2() {
        // Mocking
        SecurityContext securityContext = mock(SecurityContext.class);
        SecurityContextHolder.setContext(securityContext);
        Authentication authentication = mock(Authentication.class);
        when(authentication.getName()).thenReturn("TestUser");
        when(securityContext.getAuthentication()).thenReturn(authentication);

        // Controller
        UserController userController = new UserController(null);

        // Test
        String result = userController.getMe2();
        assertEquals("TestUser", result);
    }


    @Test
    void testGetUserData() {
        // Mocking
        UserService userService = Mockito.mock(UserService.class);
        String userLoginName = "TestUser";
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
                "john_doe",         // userLoginName
                "password123",      // userPassword
                "User"              // userRole
        );
        user.setUserLoginName(userLoginName);
        when(userService.getUserDataByLoginName(userLoginName)).thenReturn(Optional.of(user));

        // Controller
        UserController userController = new UserController(userService);

        // Test
        Optional<User> result = userController.getUserData(userLoginName);
        assertTrue(result.isPresent());
        assertEquals(userLoginName, result.get().getUserLoginName());
    }

    @Test
    void testLogin() {
        // Mocking
        SecurityContext securityContext = mock(SecurityContext.class);
        SecurityContextHolder.setContext(securityContext);
        Authentication authentication = mock(Authentication.class);
        when(authentication.getName()).thenReturn("TestUser");
        when(securityContext.getAuthentication()).thenReturn(authentication);

        // Controller
        UserController userController = new UserController(null);

        // Test
        String result = userController.login();
        assertEquals("TestUser", result);
    }

    @Test
    @WithMockUser(username = "testuser", password = "password", roles = "USER")
    void testLogout() {
        // Mocking
        HttpSession httpSession = mock(HttpSession.class);

        // Controller
        UserController userController = new UserController(null);

        // Test
        String result = userController.logout(httpSession);
        assertEquals("logged out", result);

        // Verify that HttpSession.invalidate() was called
        verify(httpSession, times(1)).invalidate();
    }

    @Test
    void testAddNewUser() {
        // Mocking
        UserService userService = Mockito.mock(UserService.class);
        User newUser = new User(
                "001",                // id
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
                "john_doe",         // userLoginName
                "password123",      // userPassword
                "User"              // userRole
        );
        newUser.setUserLoginName("NewUser");
        when(userService.addNewUser(newUser)).thenReturn(newUser);

        // Controller
        UserController userController = new UserController(userService);

        // Test
        String result = userController.addNewUser(newUser);
        assertEquals("NewUser", result);
    }

}
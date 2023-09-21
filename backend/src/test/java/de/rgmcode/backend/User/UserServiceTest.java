package de.rgmcode.backend.User;

import de.rgmcode.backend.IdService.IdService;
import de.rgmcode.backend.Ticket.TicketRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private TicketRepository ticketRepository;
    @Mock
    private IdService idService;

    @Test
    public void test_returns_list_of_all_users_when_database_not_empty() {
        // Given
        UserRepository userRepository = mock(UserRepository.class);
        IdService idService = mock(IdService.class);
        UserService userService = new UserService(userRepository, idService);

        List<User> expectedUsers = new ArrayList<>();
        expectedUsers.add(new User(
                "1",
                "uuid1",
                "2022-01-01",
                "12:00:00",
                "",
                "Mr.",
                "Doe",
                "John",
                "IT",
                "Location",
                "Building",
                "Room",
                "1234567890",
                "john.doe@example.com",
                "johndoe",
                "password",
                "user"));
        expectedUsers.add(new User(
                "2",
                "uuid2",
                "2022-01-02",
                "13:00:00", "Doc.",
                "Mrs.",
                "Smith",
                "Jane",
                "HR",
                "Location",
                "Building",
                "Room",
                "0987654321",
                "jane.smith@example.com",
                "janesmith",
                "password",
                "admin"));

        when(userRepository.findAll()).thenReturn(expectedUsers);

        // When
        List<User> actualUsers = userService.getAllUsers();

        // Then
        assertEquals(expectedUsers, actualUsers);
    }

    @Test
    public void test_load_user_by_username() {
        // Given
        String username = "testUser";
        User user = new User(
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
        );
        user.setUserLoginName(username);
        Optional<User> optionalUser = Optional.of(user);

        MockitoAnnotations.openMocks(this); // Initialisiere Mocks

        when(userRepository.findUserByUserLoginName(username)).thenReturn(optionalUser);
        UserService userService = new UserService(userRepository, idService);

        // When
        UserDetails userDetails = userService.loadUserByUsername(username);

        // Then
        assertNotNull(userDetails);
        assertEquals(username, userDetails.getUsername());
    }

    @Test
    public void test_returns_list_of_all_users_when_repository_not_empty() {
        // Given
        UserRepository userRepository = mock(UserRepository.class);
        IdService idService = mock(IdService.class);
        UserService userService = new UserService(userRepository, idService);

        List<User> userList = new ArrayList<>();
        userList.add(new User(
                "1",
                "uuid1",
                "2022-01-01",
                "12:00:00",
                "Mr.", "",
                "Doe",
                "John",
                "IT",
                "Location1",
                "Building1",
                "Room1",
                "1234567890",
                "john.doe@example.com",
                "johndoe",
                "password",
                "user"
        ));
        userList.add(new User(
                "2",
                "uuid2",
                "2022-01-02",
                "13:00:00",
                "Doc.",
                "Mrs.",
                "Smith",
                "Jane",
                "HR",
                "Location2",
                "Building2",
                "Room2",
                "0987654321",
                "jane.smith@example.com",
                "janesmith",
                "password",
                "admin"
        ));

        when(userRepository.findAll()).thenReturn(userList);

        // When
        List<User> result = userService.getAllUsers();

        // Then
        assertEquals(userList, result);
    }

}
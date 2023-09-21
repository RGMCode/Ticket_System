package de.rgmcode.backend.IdService;

import de.rgmcode.backend.Ticket.Ticket;
import de.rgmcode.backend.Ticket.TicketRepository;
import de.rgmcode.backend.User.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class IdServiceTest {

    @Test
    public void test_generate_ticket_uuid_not_null() {
        // Given
        IdService idService = new IdService(mock(TicketRepository.class), mock(UserRepository.class));

        // When
        String ticketUUID = idService.generateTicketUUID();

        // Then
        assertNotNull(ticketUUID);
    }

    @Mock
    private TicketRepository ticketRepository;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    public void test_generates_unique_uuid() {
        // Given
        IdService idService = new IdService(ticketRepository, userRepository);

        // When
        String uuid1 = idService.generateTicketUUID();
        String uuid2 = idService.generateTicketUUID();

        // Then
        assertNotEquals(uuid1, uuid2);
    }

    @Test
    public void test_generate_ticket_uuid_returns_non_null_string() {
        // Given
        IdService idService = new IdService(mock(TicketRepository.class), mock(UserRepository.class));

        // When
        String ticketUUID = idService.generateTicketUUID();

        // Then
        assertNotNull(ticketUUID);
    }

    @Test
    public void test_generate_ticket_max_id_returns_non_null_string_when_tickets_exist() {
        // Given
        TicketRepository ticketRepository = mock(TicketRepository.class);
        when(ticketRepository.findFirstByOrderByIdDesc())
                .thenReturn(Optional.of(new Ticket(
                        "1",
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
                )));
        IdService idService = new IdService(ticketRepository, mock(UserRepository.class));

        // When
        String ticketMaxID = idService.generateTicketMaxID();

        // Then
        assertNotNull(ticketMaxID);
    }

    @Test
    public void test_generate_user_uuid_returns_non_null_string() {
        // Given
        IdService idService = new IdService(mock(TicketRepository.class), mock(UserRepository.class));

        // When
        String userUUID = idService.generateUserUUID();

        // Then
        assertNotNull(userUUID);
    }

}
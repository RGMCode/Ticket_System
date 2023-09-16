package de.rgmcode.backend.Ticket;

import de.rgmcode.backend.IdService.IdService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class TicketControllerTest {

    private MockMvc mockMvc;
    private TicketController ticketController;
    private TicketService ticketService;

    @BeforeEach
    void setUp() {
        ticketService = mock(TicketService.class);
        mockMvc = MockMvcBuilders.standaloneSetup(new TicketController(ticketService)).build();
    }

    @Test
    void getAllTickets() throws Exception {
        // Given
        Ticket ticket1 = new Ticket(
                "987654",
                "434t5r435z45h4h4g4hejtrjeh4h",
                "2023-09-16",
                "10:15",
                "user456",
                "Mrs.",
                "Hello",
                "Johnson",
                "Alice",
                "HR",
                "Main Office",
                "Building B",
                "Room 202",
                "987-654-3210",
                "alice.johnson@example.com",
                "unit123",
                "Employee Benefits Question",
                "I have a question about our employee benefits.",
                "In Progress",
                "Smith",
                "David",
                "We are working on it.",
                "Assigned to HR team.",
                "Davis",
                "Sarah",
                "Wilson",
                "John",
                "Not escalated",
                "We are reviewing your question and will get back to you shortly."
        );
        Ticket ticket2 = new Ticket(
                "123456",
                "jh98uhu98i34h9fw8efh0iew",
                "2023-09-17",
                "14:30",
                "user789",
                "Mr.",
                "Hi",
                "Smith",
                "Bob",
                "IT",
                "Remote",
                "Building A",
                "Room 101",
                "123-456-7890",
                "bob.smith@example.com",
                "unit456",
                "Technical Support",
                "I need technical assistance with my computer.",
                "In Progress",
                "Johnson",
                "Emily",
                "Your request is in the queue.",
                "Assigned to IT support.",
                "Wilson",
                "Michael",
                "Brown",
                "Jennifer",
                "Escalated",
                "We apologize for the delay and will prioritize your request."

        );
        List<Ticket> tickets = Arrays.asList(ticket1, ticket2);

        // When
        when(ticketService.getAllTickets()).thenReturn(tickets);

        // Then
        mockMvc.perform(MockMvcRequestBuilders.get("/api/ticket")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value("987654"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].id").value("123456"));
    }

    @Test
    public void test_add_ticket_with_all_required_fields() {
        // Given
        TicketService ticketService = mock(TicketService.class);
        TicketRepository ticketRepository = mock(TicketRepository.class);
        IdService idService = mock(IdService.class);
        when(ticketService.getAllTickets()).thenReturn(new ArrayList<>());
        when(ticketService.addTicket(any(Ticket.class))).thenAnswer(invocation -> {
            Ticket ticket = invocation.getArgument(0);
            ticket.setId("1");
            ticket.setTicketUUID("123456");
            ticket.setTicketDate("2023-09-16");
            ticket.setTicketTime("12:00:00");
            return ticket;
        });

        // When
        TicketController ticketController = new TicketController(ticketService);
        Ticket ticket = new Ticket(
                "1",
                "123456",
                "2023-09-16",
                "12:00:00",
                "user123",
                "Prof.",
                "Mr.",
                "Doe",
                "John",
                "IT",
                "Büsum",
                "Building A",
                "101",
                "1234567890",
                "john.doe@example.com",
                "unit123",
                "Test Ticket",
                "Test Test Description",
                "Open",
                "Smoth",
                "Jane",
                "ok",
                "-ok",
                "",
                "",
                "",
                "",
                "",
                ""
        );
        ticket.setUserID("user123");
        ticket.setUserTitle("Prof.");
        ticket.setUserSalutation("Mr.");
        ticket.setUserLastName("Doe");
        ticket.setUserFirstName("John");
        ticket.setUserDepartment("IT");
        ticket.setUserLocation("Büsum");
        ticket.setUserBuilding("Building A");
        ticket.setUserRoom("101");
        ticket.setUserPhoneNumber("1234567890");
        ticket.setUserEMail("john.doe@example.com");
        ticket.setUnitID("unit123");
        ticket.setCustomerHeadline("Test Ticket");
        ticket.setCustomerDescription("Test Test Description");
        ticket.setTicketStatus("Open");
        ticket.setProcessingEmployeeLastName("Smith");
        ticket.setProcessingEmployeeFirstName("Jane");

        Ticket result = ticketController.addTicket(ticket);

        // Then
        assertNotNull(result);
        assertEquals("1", result.getId());
        assertEquals("123456", result.getTicketUUID());
        assertEquals("2023-09-16", result.getTicketDate());
        assertEquals("12:00:00", result.getTicketTime());
    }

}
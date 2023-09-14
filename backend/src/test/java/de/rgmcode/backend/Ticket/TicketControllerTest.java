package de.rgmcode.backend.Ticket;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class TicketControllerTest {

    private MockMvc mockMvc;
    private TicketController ticketController;
    private TicketService ticketService;

    @BeforeEach
    void setUp() {
        ticketService = Mockito.mock(TicketService.class);
        mockMvc = MockMvcBuilders.standaloneSetup(new TicketController(ticketService)).build();
    }

    @Test
    void getAllTickets() throws Exception {
        // Mocking data
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

        // Mocking service method
        when(ticketService.getAllTickets()).thenReturn(tickets);

        // Perform GET request
        mockMvc.perform(MockMvcRequestBuilders.get("/api/ticket")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value("987654"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].id").value("123456"));
    }



}
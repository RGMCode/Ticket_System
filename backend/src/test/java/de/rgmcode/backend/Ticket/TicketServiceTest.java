package de.rgmcode.backend.Ticket;

import de.rgmcode.backend.IdService.IdService;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TicketServiceTest {

    @Test
    public void test_returns_all_tickets_when_repository_not_empty() {
        // Given
        TicketRepository ticketRepository = mock(TicketRepository.class);
        IdService idService = mock(IdService.class);
        TicketService ticketService = new TicketService(ticketRepository, idService);

        List<Ticket> expectedTickets = Arrays.asList(
                new Ticket("1",
                        "uuid1",
                        "2021-01-01",
                        "10:00",
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
                        ),
                new Ticket(
                        "2",
                        "uuid2",
                        "2021-01-02",
                        "11:00",
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
                ),
                new Ticket(
                        "3",
                        "uuid3",
                        "2021-01-03",
                        "12:00",
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
                )
        );

        when(ticketRepository.findAll()).thenReturn(expectedTickets);

        // When
        List<Ticket> actualTickets = ticketService.getAllTickets();

        // Then
        assertEquals(expectedTickets, actualTickets);
    }

    @Test
    public void test_returns_empty_list_when_repository_empty() {
        // Given
        TicketRepository ticketRepository = mock(TicketRepository.class);
        IdService idService = mock(IdService.class);
        TicketService ticketService = new TicketService(ticketRepository, idService);

        List<Ticket> expectedTickets = Collections.emptyList();

        when(ticketRepository.findAll()).thenReturn(expectedTickets);

        // When
        List<Ticket> actualTickets = ticketService.getAllTickets();

        // Then
        assertEquals(expectedTickets, actualTickets);
    }

}
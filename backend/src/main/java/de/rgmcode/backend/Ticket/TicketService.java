package de.rgmcode.backend.Ticket;

import de.rgmcode.backend.IdService.IdService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Data
@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private IdService idService;

}

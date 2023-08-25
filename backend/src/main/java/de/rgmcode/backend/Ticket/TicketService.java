package de.rgmcode.backend.Ticket;

import de.rgmcode.backend.IdService.IdService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;

@Data
@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private final IdService idService;

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Ticket addTicket(Ticket ticket) {
        Date now = new Date();
        String currentDate = DateFormat.getDateInstance(DateFormat.MEDIUM).format(now);
        ticket.setTicketDate(currentDate);
        String currentTime = DateFormat.getTimeInstance(DateFormat.MEDIUM).format(now);
        ticket.setTicketTime(currentTime);
        ticketRepository.save(ticket.withId(idService.generateTicketMaxID())
                                    .withTicketUUID(idService.generateTicketUUID())
        );
//                                    .withTicketUUID(idService.generateTicketUUID()).withUserID(user.getId()));
//        ticketRepository.save(ticket);    // nur für das 1. Ticket die obriger Zeile auskommentieren dafür.
        return ticket;
    }

}

package de.rgmcode.backend.IdService;


import de.rgmcode.backend.CustomException.NoTicketIdAvailableException;

import de.rgmcode.backend.Ticket.Ticket;
import de.rgmcode.backend.Ticket.TicketRepository;
import de.rgmcode.backend.User.User;
import de.rgmcode.backend.User.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class IdService {

    private TicketRepository ticketRepository;
    private UserRepository userRepository;
    private Ticket ticket;
    private User user;

    public String generateTicketUUID() {
        return UUID.randomUUID().toString();
    }

    public String generateTicketMaxID() {
        Optional<Ticket> optionalTicket = ticketRepository.findFirstByOrderByIdDesc();
        if (optionalTicket.isEmpty()) {
            try {
                throw new NoTicketIdAvailableException();
            } catch (NoTicketIdAvailableException e) {
                throw new RuntimeException(e);
            }
        }
        ticket = optionalTicket.get();
        int maxTicketID = Integer.parseInt(ticket.getId()) + 1;
        return String.valueOf(maxTicketID);
    }

    public String generateUserUUID() {
        return UUID.randomUUID().toString();
    }

    public String generateUserMaxID() {
        Optional<User> optionalUser = userRepository.findFirstByOrderByIdDesc();
        if (optionalUser.isEmpty()) {
            try {
                throw new NoTicketIdAvailableException();
            } catch (NoTicketIdAvailableException e) {
                throw new RuntimeException(e);
            }
        }
        user = optionalUser.get();
        int maxUserID = Integer.parseInt(user.getId()) + 1;
        return String.valueOf(maxUserID);
    }

}

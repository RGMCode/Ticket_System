package de.rgmcode.backend.CustomException;

public class NoTicketIdAvailableException extends Exception {
    public NoTicketIdAvailableException() {
        super("No Ticket-ID available");
    }
}

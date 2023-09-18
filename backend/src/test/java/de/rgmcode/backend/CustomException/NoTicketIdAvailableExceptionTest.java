package de.rgmcode.backend.CustomException;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class NoTicketIdAvailableExceptionTest {

    @Test
    public void test_no_ticket_id_available_exception() {
        // Given
        NoTicketIdAvailableException exception;

        // When
        exception = new NoTicketIdAvailableException();

        // Then
        assertNotNull(exception);
        assertEquals("No Ticket-ID available", exception.getMessage());
    }

    @Test
    public void test_customized_exception_message() {
        // Given
        NoTicketIdAvailableException exception;
        String customMessage = "No Ticket-ID available";

        // When
        exception = new NoTicketIdAvailableException();

        // Then
        assertNotNull(exception);
        assertEquals(customMessage, exception.getMessage());
    }

    @Test
    public void test_checked_exception() {
        // Given

        // When

        // Then
        assertThrows(NoTicketIdAvailableException.class, () -> {
            throw new NoTicketIdAvailableException();
        });
    }

    @Test
    public void test_no_ticket_id_available_exception_with_empty_message() {
        // Given
        NoTicketIdAvailableException exception;
        String emptyMessage = "";

        // When
        exception = new NoTicketIdAvailableException();

        // Then
        assertNotNull(exception);
        assertNotEquals(emptyMessage, exception.getMessage());
    }

}
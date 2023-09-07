package de.rgmcode.backend.Ticket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.With;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@With
@AllArgsConstructor
@Document("Ticket")
public class Ticket {

    // theoretische muss noch die User ID pro Ticket für die zuordnung gespeichert werden

    private String id;                              // ID
    private String ticketUUID;                      // Unique UUID
    private String ticketDate;                      // Datum wann das Ticket erstellt wurde
    private String ticketTime;                      // Uhrzeit wann das Ticket erstellt wurde

    private String userID;                          // ID des Erstellers

    private String userTitle;
    private String userSalutation;
    private String userLastName;
    private String userFirstName;

    private String userDepartment;
    private String userLocation;
    private String userBuilding;
    private String userRoom;

    private String userPhoneNumber;
    private String userEMail;

    private String unitID;                          // NB / PC / TC o.ä. ID

    private String customerHeadline;                // Kunden-Überschrift
    private String customerDescription;             // Kunden-Beschreibung
    private String ticketStatus;                    // noch offen, in bearbeitung, beendet

    private String processingEmployeeLastName;      // bearbeitender Mitarbeiter
    private String processingEmployeeFirstName;     // bearbeitender Mitarbeiter

    private String publicComment;                   // öffentlicher Kommentar
    private String internalComment;                 // interner Kommentar

    private String employeeHistoryLastName;         // Mitarbeiter History
    private String employeeHistoryFirstName;        // Mitarbeiter History

    private String contributingEmployeesLastName;   // mitwirkende Mitarbeiter
    private String contributingEmployeesFirstName;  // mitwirkende Mitarbeiter

    private String escalationStatus;                // Eskalastions-Status

    private String solutionAnswer;                  // Lösungs-Antwort

}

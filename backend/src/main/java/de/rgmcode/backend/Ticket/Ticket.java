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

    private String id;
    private String ticketUUID;
    private String ticketDate;
    private String ticketTime;

    private String userID;

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

    private String unitID;

    private String customerHeadline;
    private String customerDescription;
    private String ticketStatus;

    private String processingEmployeeLastName;
    private String processingEmployeeFirstName;

    private String publicComment;
    private String internalComment;

    private String employeeHistoryLastName;
    private String employeeHistoryFirstName;

    private String contributingEmployeesLastName;
    private String contributingEmployeesFirstName;

    private String escalationStatus;

    private String solutionAnswer;

}

package de.rgmcode.backend.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.With;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@With
@AllArgsConstructor
@Document("User")
public class User {

    private String id;                      // ID
    private String userUUID;                // Unique ID

    private String registrationDate;        // Registrierungs Datum (Serverzeit)
    private String registrationTime;        // Registrierungs Uhrzeit (Serverzeit)

    private String title;                   // Dr. Prof. usw. ...
    private String salutation;              // Herr oder Frau oder x
    private String customerLastName;        // Nachname des Kundens
    private String customerFirstName;       // Vorname des Kundens
    private String customerTelefonnumber;   // Kunden Telefon
    private String customerEMail;           // Kunden-EMail

    private String customerDepartment;      // Abteilung des Kundens

    private String role;                    // Mitarbeiter, Fachmitarbeiter, Admin

    private String password;                // User Password

}

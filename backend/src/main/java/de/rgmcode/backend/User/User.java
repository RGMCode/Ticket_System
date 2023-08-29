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

    private String id;
    private String userUUID;

    private String userRegistrationDate;
    private String userRegistrationTime;

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

    private String userLoginName;
    private String userPassword;

    private String userRole;

}

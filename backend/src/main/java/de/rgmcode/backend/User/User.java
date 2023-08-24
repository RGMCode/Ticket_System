package de.rgmcode.backend.User;

import lombok.Data;
import lombok.With;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@With
@Document("Users")
public class User {

}

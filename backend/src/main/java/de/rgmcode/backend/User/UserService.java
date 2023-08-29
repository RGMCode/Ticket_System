package de.rgmcode.backend.User;

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
public class UserService {

    private final UserRepository userRepository;
    private final IdService idService;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User addNewUser(User user) {
        Date now = new Date();
        String currentDate = DateFormat.getDateInstance(DateFormat.MEDIUM).format(now);
        user.setUserRegistrationDate(currentDate);
        String currentTime = DateFormat.getTimeInstance(DateFormat.MEDIUM).format(now);
        user.setUserRegistrationTime(currentTime);
        userRepository.save(user.withId(idService.generateUserMaxID())
                                .withUserUUID(idService.generateUserUUID())
        );
//        userRepository.save(user);    // nur für den 1. User die obriger Zeile auskommentieren dafür.
        return user;
    }


}

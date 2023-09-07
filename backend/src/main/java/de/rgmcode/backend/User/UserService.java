package de.rgmcode.backend.User;

import de.rgmcode.backend.IdService.IdService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Data
@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final IdService idService;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUserLoginName(username)
                .orElseThrow(()-> new UsernameNotFoundException("User with username: " + username + " not found"));
        return new org.springframework.security.core.userdetails.User(user.getUserLoginName(), user.getUserPassword(), List.of());
    }

    public User addNewUser(User user) {
        if (userRepository.findUserByUserLoginName(user.getUserLoginName()).equals(user.getUserLoginName())){
            throw new IllegalArgumentException("Username already taken");
        }
        Date now = new Date();
        String currentDate = DateFormat.getDateInstance(DateFormat.MEDIUM).format(now);
        user.setUserRegistrationDate(currentDate);
        String currentTime = DateFormat.getTimeInstance(DateFormat.MEDIUM).format(now);
        user.setUserRegistrationTime(currentTime);
        PasswordEncoder encoder = Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();
        userRepository.save(user.withUserPassword(encoder.encode(user.getUserPassword()))
                                .withId(idService.generateUserMaxID())
                                .withUserUUID(idService.generateUserUUID())
        );
//        userRepository.save(user);    // nur für den 1. User die obriger Zeile auskommentieren dafür.
        return user;
    }

    public Optional<User> getUserDataByLoginName(String userLoginName) {
        return userRepository.findUserByUserLoginName(userLoginName);
    }

}

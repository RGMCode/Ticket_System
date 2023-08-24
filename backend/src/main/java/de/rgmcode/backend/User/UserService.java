package de.rgmcode.backend.User;

import de.rgmcode.backend.IdService.IdService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Data
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final IdService idService;

}

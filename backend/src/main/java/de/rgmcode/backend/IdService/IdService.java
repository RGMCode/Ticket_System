package de.rgmcode.backend.IdService;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class IdService {

    public String generateUUID() {
        return UUID.randomUUID().toString();
    }

}

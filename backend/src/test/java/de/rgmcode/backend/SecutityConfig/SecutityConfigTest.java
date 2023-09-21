package de.rgmcode.backend.SecutityConfig;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

class SecutityConfigTest {

    @Test
    public void test_returns_password_encoder_object() {
        // Given
        SecutityConfig secutityConfig = new SecutityConfig();

        // When
        PasswordEncoder passwordEncoder = secutityConfig.passwordEncoder();

        // Then
        assertNotNull(passwordEncoder);
        assertTrue(true);
    }

}





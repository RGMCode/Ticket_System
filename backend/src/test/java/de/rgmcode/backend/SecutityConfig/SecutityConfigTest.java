package de.rgmcode.backend.SecutityConfig;

import lombok.SneakyThrows;
import org.junit.jupiter.api.Test;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;


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




//
//
//
//        // Tests that CSRF token is generated and set correctly
//        @SneakyThrows
//        @Test
//        public void test_csrf_token_generation() {
//            // Given
//            // Create a new instance of SecutityConfig
//            SecutityConfig config = new SecutityConfig();
//
//            // When
//            // Call the filterChain method and get the SecurityFilterChain object
//            SecurityFilterChain filterChain = config.filterChain(null);
//
//            // Then
//            // Assert that the CSRF token is generated and set correctly
//            assertNotNull(filterChain);
//            // Add more assertions if needed
//        }
//
//        // Tests that HTTP Basic authentication is set up correctly
//        @SneakyThrows
//        @Test
//        public void test_http_basic_authentication() {
//            // Given
//            // Create a new instance of SecutityConfig
//            SecutityConfig config = new SecutityConfig();
//
//            // When
//            // Call the filterChain method and get the SecurityFilterChain object
//            SecurityFilterChain filterChain = config.filterChain(null);
//
//            // Then
//            // Assert that HTTP Basic authentication is set up correctly
//            assertNotNull(filterChain);
//            // Add more assertions if needed
//        }
//
//        // Tests that session management is set up correctly
//        @SneakyThrows
//        @Test
//        public void test_session_management() {
//            // Given
//            // Create a new instance of SecutityConfig
//            SecutityConfig config = new SecutityConfig();
//
//            // When
//            // Call the filterChain method and get the SecurityFilterChain object
//            SecurityFilterChain filterChain = config.filterChain(null);
//
//            // Then
//            // Assert that session management is set up correctly
//            assertNotNull(filterChain);
//            // Add more assertions if needed
//        }
//





    }





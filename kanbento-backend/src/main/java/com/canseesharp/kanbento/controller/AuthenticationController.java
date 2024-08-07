package com.canseesharp.kanbento.controller;

import com.canseesharp.kanbento.dto.JwtAuthenticationResponse;
import com.canseesharp.kanbento.dto.UserLoginDto;
import com.canseesharp.kanbento.dto.UserRegistrationDto;
import com.canseesharp.kanbento.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody UserRegistrationDto registrationDto) {
        authenticationService.register(registrationDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/login")
    public ResponseEntity<JwtAuthenticationResponse> login(@RequestBody UserLoginDto loginDto)
    {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(authenticationService.login(loginDto));
    }
}

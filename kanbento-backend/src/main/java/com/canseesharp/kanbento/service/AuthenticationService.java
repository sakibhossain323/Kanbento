package com.canseesharp.kanbento.service;

import com.canseesharp.kanbento.dto.JwtAuthenticationResponse;
import com.canseesharp.kanbento.dto.UserLoginDto;
import com.canseesharp.kanbento.dto.UserRegistrationDto;

public interface AuthenticationService {
    void register(UserRegistrationDto userRegistrationDto);
    JwtAuthenticationResponse login(UserLoginDto userLoginDto);
}

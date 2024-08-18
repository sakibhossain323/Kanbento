package com.canseesharp.kanbento.service;

import com.canseesharp.kanbento.dto.JwtAuthenticationResponse;
import com.canseesharp.kanbento.dto.UserLoginDto;
import com.canseesharp.kanbento.dto.UserRegistrationDto;
import com.canseesharp.kanbento.entity.KanbentoUser;

public interface AuthenticationService {
    void register(UserRegistrationDto userRegistrationDto);
    JwtAuthenticationResponse login(UserLoginDto userLoginDto);
}

package com.canseesharp.kanbento.service.implementation;

import com.canseesharp.kanbento.dto.JwtAuthenticationResponse;
import com.canseesharp.kanbento.dto.KanbentoUserDto;
import com.canseesharp.kanbento.dto.UserLoginDto;
import com.canseesharp.kanbento.dto.UserRegistrationDto;
import com.canseesharp.kanbento.entity.KanbentoUser;
import com.canseesharp.kanbento.exception.AlreadyExistsException;
import com.canseesharp.kanbento.repository.RoleRepository;
import com.canseesharp.kanbento.repository.UserRepository;
import com.canseesharp.kanbento.security.JwtTokenProvider;
import com.canseesharp.kanbento.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
public class JwtAuthenticationService implements AuthenticationService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtProvider;
    @Override
    public void register(UserRegistrationDto userRegistrationDto) {
        userRepository.findByUsername(userRegistrationDto.getUsername())
                .ifPresent(user -> {
                    throw new AlreadyExistsException("User already exists with username: " + user.getUsername());
                });
        userRepository.findByEmail(userRegistrationDto.getEmail())
                .ifPresent(user -> {
                    throw new AlreadyExistsException("User already exists with email: " + user.getEmail());
                });

        KanbentoUser user = new KanbentoUser();
        user.setUsername(userRegistrationDto.getUsername());
        user.setEmail(userRegistrationDto.getEmail());
        user.setPassword(passwordEncoder.encode(userRegistrationDto.getPassword()));
        user.setRoles(Stream.of(
                    roleRepository.findByName("ROLE_USER")
                ).collect(Collectors.toCollection(HashSet::new)));

        userRepository.save(user);
    }

    @Override
    public JwtAuthenticationResponse login(UserLoginDto userLoginDto) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        userLoginDto.getUsernameOrEmail(),
                        userLoginDto.getPassword()
                ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateToken(authentication);
        String username = jwtProvider.getUsername(jwt);

        JwtAuthenticationResponse response = new JwtAuthenticationResponse();
        response.setAccessToken(jwt);
        response.setRole(authentication.getAuthorities()
                .stream()
                .findFirst()
                .map(GrantedAuthority::getAuthority)
                .orElse(null)
        );
        response.setUser(userRepository.findByUsername(username)
                .map(user -> new KanbentoUserDto(user.getId(), user.getUsername(), user.getEmail()))
                .orElse(null)
        );

        return response;
    }
}

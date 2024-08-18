package com.canseesharp.kanbento.service.implementation;

import com.canseesharp.kanbento.dto.KanbentoUserDto;
import com.canseesharp.kanbento.entity.KanbentoUser;
import com.canseesharp.kanbento.exception.ResourceNotFoundException;
import com.canseesharp.kanbento.repository.UserRepository;
import com.canseesharp.kanbento.service.KanbentoUserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DefaultKanbentoUserService implements KanbentoUserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    @Override
    public KanbentoUserDto getUserByUsername(String username) {

        KanbentoUser kanbentoUser = userRepository.findByUsername(username)
                .orElseThrow(()-> new ResourceNotFoundException("User not found with username :" + username));

        System.out.println(kanbentoUser);

        return modelMapper.map(kanbentoUser, KanbentoUserDto.class);

    }
}

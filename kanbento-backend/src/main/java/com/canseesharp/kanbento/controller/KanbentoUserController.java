package com.canseesharp.kanbento.controller;

import com.canseesharp.kanbento.dto.KanbentoUserDto;
import com.canseesharp.kanbento.entity.KanbentoUser;
import com.canseesharp.kanbento.service.KanbentoUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class KanbentoUserController {

    private final KanbentoUserService kanbentoUserService;

    // Build Get User By Username Rest API
    @GetMapping("/{username}")
    public ResponseEntity<KanbentoUserDto> getUser(@PathVariable String username)
    {
        KanbentoUserDto kanbentoUserDto = kanbentoUserService.getUserByUsername(username);
        //KanbentoUser kanbentoUser = kanbentoUserService.getUserByUsername(username);

        return new ResponseEntity<>(kanbentoUserDto, HttpStatus.OK);
        //return new ResponseEntity<>(kanbentoUser, HttpStatus.OK);
    }
}

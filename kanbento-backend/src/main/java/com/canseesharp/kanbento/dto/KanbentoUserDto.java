package com.canseesharp.kanbento.dto;

import com.canseesharp.kanbento.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class KanbentoUserDto {
    private Long id;
    private String username;
    private String email;
}

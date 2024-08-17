package com.canseesharp.kanbento.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationDto {

    private Long id;
    private String name;
    private String description;
    private String location;
    private String email;
    private Long ownerId;
    private Set<Long> membersId;
}

package com.canseesharp.kanbento.service;

import com.canseesharp.kanbento.dto.KanbentoUserDto;
import com.canseesharp.kanbento.dto.OrganizationDto;
import com.canseesharp.kanbento.entity.KanbentoUser;

import java.util.List;

public interface OrganizationService {

    OrganizationDto createOrganization(OrganizationDto organizationDto);

    OrganizationDto getOrganizationById(Long id);

    List<OrganizationDto> getAllOrganizations();

    List<OrganizationDto> getAllOrganizationsByOwnerId(Long ownerId);

    OrganizationDto updateOrganization(OrganizationDto organizationDto, Long id);

    void deleteOrganization(Long id);

    OrganizationDto addMember(Long organizationId, Long memberId);

    OrganizationDto removeMember(Long organizationId, Long memberId);

    List<KanbentoUserDto> getAllMembers(Long organizationId);
}

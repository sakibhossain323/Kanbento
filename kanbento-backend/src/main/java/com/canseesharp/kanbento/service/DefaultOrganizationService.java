package com.canseesharp.kanbento.service;

import com.canseesharp.kanbento.dto.EventDto;
import com.canseesharp.kanbento.dto.OrganizationDto;
import com.canseesharp.kanbento.entity.Event;
import com.canseesharp.kanbento.entity.KanbentoUser;
import com.canseesharp.kanbento.entity.Organization;
import com.canseesharp.kanbento.exception.ResourceNotFoundException;
import com.canseesharp.kanbento.repository.OrganizationRepository;
import com.canseesharp.kanbento.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class DefaultOrganizationService implements OrganizationService {

    private final UserRepository userRepository;
    private final OrganizationRepository organizationRepository;
    private final ModelMapper modelMapper;

    private Organization findByIdOrThrow(Long id) {
        return organizationRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
    }

    @Override
    public OrganizationDto createOrganization(OrganizationDto organizationDto) {

        System.out.println(organizationDto);

        KanbentoUser owner = userRepository.findById(organizationDto.getOwnerId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Organization organization = modelMapper.map(organizationDto, Organization.class);
        organization.setOwner(owner);

        Set<KanbentoUser> members = new HashSet<>();
        members.add(owner);
        organization.setMembers(members);

        System.out.println(organization);

        organization = organizationRepository.save(organization);

        return modelMapper.map(organization, OrganizationDto.class);
    }

    @Override
    public OrganizationDto getOrganizationById(Long id) {
        Organization organization = this.findByIdOrThrow(id);
        return modelMapper.map(organization, OrganizationDto.class);
    }

    @Override
    public List<OrganizationDto> getAllOrganizations() {
        List<Organization> organizations = organizationRepository.findAll();
        return organizations.stream()
                .map(organization -> modelMapper.map(organization, OrganizationDto.class))
                .toList();
    }

    @Override
    public OrganizationDto updateOrganization(OrganizationDto organizationDto, Long id) {

        Organization organization = this.findByIdOrThrow(id);
        organization.setName(organizationDto.getName());
        organization.setDescription(organizationDto.getDescription());
        organization.setLocation(organizationDto.getLocation());
        organization.setEmail(organizationDto.getEmail());

        organization = organizationRepository.save(organization);

        return modelMapper.map(organization, OrganizationDto.class);
    }

    @Override
    public void deleteOrganization(Long id) {

        this.findByIdOrThrow(id);
        organizationRepository.deleteById(id);
    }

    @Override
    public OrganizationDto addMember(Long organizationId, Long memberId) {

        Organization organization = this.findByIdOrThrow(organizationId);
        KanbentoUser member = userRepository.findById(memberId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Set<KanbentoUser> members = organization.getMembers();
        members.add(member);
        organization.setMembers(members);

        organization = organizationRepository.save(organization);
        member = userRepository.save(member);


        return modelMapper.map(organization, OrganizationDto.class);
    }

    @Override
    public OrganizationDto removeMember(Long organizationId, Long memberId) {

        Organization organization = this.findByIdOrThrow(organizationId);
        KanbentoUser member = userRepository.findById(memberId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Set<KanbentoUser> members = organization.getMembers();
        members.remove(member);
        organization.setMembers(members);

        organization = organizationRepository.save(organization);

        return modelMapper.map(organization, OrganizationDto.class);
    }
}

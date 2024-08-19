package com.canseesharp.kanbento.controller;

import com.canseesharp.kanbento.dto.KanbentoUserDto;
import com.canseesharp.kanbento.dto.OrganizationDto;
import com.canseesharp.kanbento.service.OrganizationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/organizations")
@AllArgsConstructor
public class OrganizationController {

    private final OrganizationService organizationService;

    // Build Add Organization Rest API
    @PostMapping
    public ResponseEntity<OrganizationDto> createOrganization(@RequestBody OrganizationDto organizationDto)
    {
        OrganizationDto savedOrganization = organizationService.createOrganization(organizationDto);

        return new ResponseEntity<>(savedOrganization, HttpStatus.CREATED);
    }

    // Build Get Organization By Id Rest API
    @GetMapping("/{organizationId}")
    public ResponseEntity<OrganizationDto> getOrganization(@PathVariable Long organizationId)
    {
        OrganizationDto organizationDto = organizationService.getOrganizationById(organizationId);

        return new ResponseEntity<>(organizationDto, HttpStatus.OK);
    }

    // Build Get All Organizations Rest API
    @GetMapping
    public ResponseEntity<List<OrganizationDto>> getAllOrganizations()
    {
        List<OrganizationDto> organizationDtos = organizationService.getAllOrganizations();

        return new ResponseEntity<>(organizationDtos, HttpStatus.OK);
    }

    // Build Get All Organizations By Owner Id Rest API
    @GetMapping("/owner/{ownerId}")
    public ResponseEntity<List<OrganizationDto>> getAllOrganizationsByOwnerId(@PathVariable Long ownerId)
    {
        List<OrganizationDto> organizationDtos = organizationService.getAllOrganizationsByOwnerId(ownerId);

        return new ResponseEntity<>(organizationDtos, HttpStatus.OK);
    }

    // Build Update Organization Rest API
    @PutMapping("/{organizationId}")
    public ResponseEntity<OrganizationDto> updateOrganization(@RequestBody OrganizationDto organizationDto, @PathVariable Long organizationId)
    {
        OrganizationDto updatedOrganization = organizationService.updateOrganization(organizationDto, organizationId);

        return new ResponseEntity<>(updatedOrganization, HttpStatus.OK);
    }

    // Build Delete Organization Rest API
    @DeleteMapping("/{organizationId}")
    public ResponseEntity<String> deleteOrganization(@PathVariable Long organizationId)
    {
        organizationService.deleteOrganization(organizationId);

        return ResponseEntity.ok("Organization deleted successfully");
    }

    // Build Add Member Rest API
    @PutMapping("/{organizationId}/members/{memberId}")
    public ResponseEntity<OrganizationDto> addMember(@PathVariable Long organizationId, @PathVariable Long memberId)
    {
        OrganizationDto updatedOrganization = organizationService.addMember(organizationId, memberId);

        return new ResponseEntity<>(updatedOrganization, HttpStatus.OK);
    }

    // Build Remove Member Rest API
    @DeleteMapping("/{organizationId}/members/{memberId}")
    public ResponseEntity<String> removeMember(@PathVariable Long organizationId, @PathVariable Long memberId)
    {
        OrganizationDto updatedOrganization = organizationService.removeMember(organizationId, memberId);

        return ResponseEntity.ok("Member removed successfully");
    }

    // Build Get All Members Rest API
    @GetMapping("/{organizationId}/members")
    public ResponseEntity<List<KanbentoUserDto>> getAllMembers(@PathVariable Long organizationId)
    {
        List<KanbentoUserDto> members = organizationService.getAllMembers(organizationId);

        return new ResponseEntity<>(members, HttpStatus.OK);
    }
}

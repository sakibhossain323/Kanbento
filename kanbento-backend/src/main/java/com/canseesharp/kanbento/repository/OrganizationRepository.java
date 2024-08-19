package com.canseesharp.kanbento.repository;

import com.canseesharp.kanbento.entity.Organization;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrganizationRepository extends JpaRepository<Organization, Long> {

    List<Organization> findAllByOwnerId(Long ownerId);
}

package com.canseesharp.kanbento.repository;

import com.canseesharp.kanbento.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}

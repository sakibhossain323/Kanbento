package com.canseesharp.kanbento.repository;

import com.canseesharp.kanbento.entity.KanbentoUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<KanbentoUser, Long> {
    Optional<KanbentoUser> findByUsername(String username);
    Optional<KanbentoUser> findByEmail(String email);
    Optional<KanbentoUser> findByUsernameOrEmail(String username, String email);
}

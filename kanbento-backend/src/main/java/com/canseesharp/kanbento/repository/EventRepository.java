package com.canseesharp.kanbento.repository;

import com.canseesharp.kanbento.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}

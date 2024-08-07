package com.canseesharp.kanbento.service;

import com.canseesharp.kanbento.dto.EventDto;

import java.util.List;

public interface EventService {
    EventDto createEvent(EventDto eventDto);
    EventDto getEventById(Long id);
    List<EventDto> getAllEvents();
    EventDto updateEvent(Long id, EventDto eventDto);
    void deleteEvent(Long id);
}

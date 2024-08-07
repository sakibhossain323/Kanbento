package com.canseesharp.kanbento.service;

import com.canseesharp.kanbento.dto.EventDto;
import com.canseesharp.kanbento.entity.Event;
import com.canseesharp.kanbento.exception.ResourceNotFoundException;
import com.canseesharp.kanbento.repository.EventRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DefaultEventService implements EventService{
    private final EventRepository eventRepository;

    private Event findByIdOrThrow(Long id) {
        return eventRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
    }

    @Override
    public EventDto createEvent(EventDto eventDto) {
        Event event = new Event();
        event.setTitle(eventDto.getTitle());
        event = eventRepository.save(event);
        return new EventDto(event.getId(), event.getTitle());
    }

    @Override
    public EventDto getEventById(Long id) {
        Event event = this.findByIdOrThrow(id);
        return new EventDto(event.getId(), event.getTitle());
    }

    @Override
    public List<EventDto> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream()
                .map(event -> new EventDto(event.getId(), event.getTitle()))
                .toList();
    }

    @Override
    public EventDto updateEvent(Long id, EventDto eventDto) {
        Event event = this.findByIdOrThrow(id);
        event.setTitle(eventDto.getTitle());
        event = eventRepository.save(event);
        return new EventDto(event.getId(), event.getTitle());
    }

    @Override
    public void deleteEvent(Long id) {
        this.findByIdOrThrow(id);
        eventRepository.deleteById(id);
    }
}

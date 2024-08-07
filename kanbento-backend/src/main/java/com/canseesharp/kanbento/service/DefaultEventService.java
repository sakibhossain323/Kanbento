package com.canseesharp.kanbento.service;

import com.canseesharp.kanbento.dto.EventDto;
import com.canseesharp.kanbento.entity.Event;
import com.canseesharp.kanbento.exception.ResourceNotFoundException;
import com.canseesharp.kanbento.repository.EventRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DefaultEventService implements EventService{
    private final EventRepository eventRepository;
    private final ModelMapper modelMapper;

    private Event findByIdOrThrow(Long id) {
        return eventRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found"));
    }

    @Override
    public EventDto createEvent(EventDto eventDto) {
        Event event = modelMapper.map(eventDto, Event.class);
        event = eventRepository.save(event);
        return modelMapper.map(event, EventDto.class);
    }

    @Override
    public EventDto getEventById(Long id) {
        Event event = this.findByIdOrThrow(id);
        return modelMapper.map(event, EventDto.class);
    }

    @Override
    public List<EventDto> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream()
                .map(event -> modelMapper.map(event, EventDto.class))
                .toList();
    }

    @Override
    public EventDto updateEvent(Long id, EventDto eventDto) {
        Event event = this.findByIdOrThrow(id);
        event.setTitle(eventDto.getTitle());
        event = eventRepository.save(event);
        return modelMapper.map(event, EventDto.class);
    }

    @Override
    public void deleteEvent(Long id) {
        this.findByIdOrThrow(id);
        eventRepository.deleteById(id);
    }
}

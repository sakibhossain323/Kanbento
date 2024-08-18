package com.canseesharp.kanbento.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class EventDto {
    private Long id;
    private String title;
    private String description;
    private String location;
    private String date;
    private String time;
    private Long organizationId;
}

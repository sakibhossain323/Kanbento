package com.canseesharp.kanbento.exception;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ErrorDetails {
    private LocalDateTime timestamp;
    private String message;
    private String details;
}

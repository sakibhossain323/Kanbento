package com.canseesharp.kanbento.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenProvider {
    @Value("${jwt-secret}")
    private String secret;
    @Value("${jwt-validity}")
    private long validity;

    public String generateToken(Authentication authentication) {
        String username = authentication.getName();
        Date issuedAt = new Date();
        Date expiration = new Date(issuedAt.getTime() + validity);

        return Jwts.builder()
                .subject(username)
                .issuedAt(issuedAt)
                .expiration(expiration)
                .signWith(Keys.hmacShaKeyFor(secret.getBytes()))
                .compact();
    }

    public String getUsername(String token) {
        return Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(secret.getBytes()))
                .build()
                .parseSignedClaims(token)
                .getPayload().getSubject();
    }

    public boolean validateToken(String token) {
        Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(secret.getBytes()))
                .build()
                .parseSignedClaims(token);
        return true;
    }
}

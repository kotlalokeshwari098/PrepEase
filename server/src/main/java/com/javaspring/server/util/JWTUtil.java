package com.javaspring.server.util;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JWTUtil {

    @Value("${jwt.secret}")
    private String jwtSecret;
    @Value("${jwt.expiration}")
    private int EXPIRATION_TIME;
    private SecretKey key;

    @PostConstruct
    public void init() {
        this.key = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(String username){
//        System.out.println(username+"username");
        // Generate JWT token
       return Jwts
               .builder()
               .setSubject(username)
               .setIssuedAt(new Date())
               .setExpiration(new Date(System.currentTimeMillis() +EXPIRATION_TIME))
               .signWith(key,SignatureAlgorithm.HS256)
               .compact();

   }

   public String getUsername(String Token){
        return extractClaims(Token).getSubject();
   }

    private Claims extractClaims(String token) {
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        token = token.trim();
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

    }

    public boolean validateToken(String username, UserDetails userdetails, String token) {
        //check if username is same as that in db
        //token not expired
       return username.equals(userdetails.getUsername()) && !isTokenExpired(token);

    }

    private boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }
}

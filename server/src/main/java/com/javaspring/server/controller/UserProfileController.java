package com.javaspring.server.controller;

import com.javaspring.server.service.MyUserDetailsService;
import com.javaspring.server.util.JWTUtil;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserProfileController {

    private final MyUserDetailsService userProfileService;

    private final JWTUtil jwtUtil;

    public UserProfileController(MyUserDetailsService userprofileservice, JWTUtil jwtUtil){
        this.userProfileService = userprofileservice;
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/user/profile")
    public UserDetails userProfile(@RequestHeader("Authorization") String token){
        String username=jwtUtil.getUsername(token);
        return userProfileService.loadUserByUsername(username);
    }
}

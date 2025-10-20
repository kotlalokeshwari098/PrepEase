package com.javaspring.server.controller;


import com.javaspring.server.model.AuthRequest;
import com.javaspring.server.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JWTUtil jwtUtil;

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody
                                AuthRequest authRequest){
        try {
            System.out.println(authRequest);
            //here user is authenticated-username and password are checked
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );

            //generate jwt token
           return jwtUtil.generateToken(authRequest.getUsername());
        }catch (Exception e){
            throw e;
        }
    }
}

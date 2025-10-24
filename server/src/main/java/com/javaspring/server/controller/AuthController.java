package com.javaspring.server.controller;


import com.javaspring.server.model.AuthRequest;
import com.javaspring.server.model.User;
import com.javaspring.server.repository.UserRepository;
import com.javaspring.server.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JWTUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<? extends Object> registerUser(@RequestBody User data){
        try{
            Map<String, Object> response = new HashMap<>();
          Optional<User> existingUser= userRepository.findByEmail(data.getEmail());
//            System.out.println(existingUser);
            if (existingUser.isPresent()) {
                response.put("success", false);
                response.put("message", "User already exists");
                return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
            }
            else{
                String hashedPassword=passwordEncoder.encode(data.getPassword());
                data.setPassword(hashedPassword);
                userRepository.save(data);
            }
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body("User registered successfully");

        }catch(Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal server error");
        }
    }

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody
                                AuthRequest authRequest){
        try {
//            System.out.println(authRequest);
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

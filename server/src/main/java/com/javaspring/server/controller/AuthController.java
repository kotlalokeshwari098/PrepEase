package com.javaspring.server.controller;


import com.javaspring.server.dtos.AuthRequest;
import com.javaspring.server.model.User;
import com.javaspring.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private UserService userService;


    @PostMapping("/register")
    public ResponseEntity<? extends Object> registerUser(@RequestBody User data){
        User user=new User();
        user.setUsername(data.getUsername());
        user.setEmail(data.getEmail());
        user.setPassword(data.getPassword());
        User userRegister=userService.registerUser(user);
        if(userRegister!=null){
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("User registered successfully!");
        }

        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body("User already exists!");
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> loginUser(@RequestBody
                                AuthRequest authRequest){

       return ResponseEntity.ok(userService.authenticateUser(authRequest));
    }
}

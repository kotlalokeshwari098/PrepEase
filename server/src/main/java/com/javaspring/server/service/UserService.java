package com.javaspring.server.service;


import com.javaspring.server.dtos.LoginRequest;
import com.javaspring.server.model.User;
import com.javaspring.server.repository.UserRepository;
import com.javaspring.server.util.JWTUtil;
import com.javaspring.server.util.JwtAuthenticationResponse;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private AuthenticationManager authenticationManager;
    private JWTUtil jwtUtil;

    public User registerUser(User user){
      user.setPassword(passwordEncoder.encode(user.getPassword()));
      return userRepository.save(user);
    }

    public JwtAuthenticationResponse loginUser(LoginRequest loginRequest){
        Authentication authentication= authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
                        loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
         UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
         String jwt=jwtUtil.generateToken(userDetails.getUsername());
         return new JwtAuthenticationResponse(jwt);
    }

    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }
}

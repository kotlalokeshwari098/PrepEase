package com.javaspring.server.service;


import com.javaspring.server.dtos.AuthRequest;
import com.javaspring.server.dtos.LoginResponse;
import com.javaspring.server.model.User;
import com.javaspring.server.repository.UserRepository;
import com.javaspring.server.util.JWTUtil;
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
      User userReg=findByUsername(user.getUsername());
      if(userReg==null){
          return userRepository.save(user);
      }
      return null;
    }

    public LoginResponse authenticateUser(AuthRequest loginRequest){
        Authentication authentication= authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
                        loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
         UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
         String jwt=jwtUtil.generateToken(userDetails.getUsername());
         return new LoginResponse(userDetails.getUsername(),userDetails.getEmail(),jwt);
    }

    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }
}

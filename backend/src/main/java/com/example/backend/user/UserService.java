package com.example.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String mail) {
        return userRepository.findByEmail(mail);
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }


}

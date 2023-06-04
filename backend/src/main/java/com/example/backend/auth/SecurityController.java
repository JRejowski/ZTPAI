package com.example.backend.auth;

import com.example.backend.models.User;
import com.example.backend.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:3000")
public class SecurityController {

    private final UserService userService;

    public SecurityController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegistrationRequest request) {
        if (userService.doesUserExist(request.getLogin())) {
            return ResponseEntity.badRequest().body("Użytkownik o podanym loginie już istnieje.");
        }

        if (userService.doesEmailExist(request.getEmail())) {
            return ResponseEntity.badRequest().body("Użytkownik o podanym adresie e-mail już istnieje.");
        }

        if (!request.getPassword().equals(request.getRepeatPassword())) {
            return ResponseEntity.badRequest().body("Podane hasła nie są identyczne.");
        }

        User user = User.builder()
                .login(request.getLogin())
                .email(request.getEmail())
                .password(request.getPassword())
                .image(request.getImage())
                .build();

        userService.registerUser(user);

        return ResponseEntity.ok("Rejestracja zakończona pomyślnie.");
    }
}

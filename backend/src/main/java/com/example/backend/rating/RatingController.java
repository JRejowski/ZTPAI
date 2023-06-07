package com.example.backend.rating;

import com.example.backend.user.User;
import com.example.backend.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ratings")
@CrossOrigin(origins="http://localhost:3000")
public class RatingController {

    private final RatingService ratingService;
    private final UserService userService;

    @Autowired
    public RatingController(RatingService ratingService, UserService userService) {
        this.ratingService = ratingService;
        this.userService = userService;
    }

    @GetMapping("/user")
    public List<Rating> getRatingByUserId(Authentication authentication){
        String mail = authentication.getName();
        User user = userService.getUserByEmail(mail);
        Long userId = user.getId();

        return ratingService.getRatingsByUserId(userId);
    }
}

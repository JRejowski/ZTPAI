package com.example.backend.rating;

import com.example.backend.user.User;
import com.example.backend.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add")
    public ResponseEntity<RatingDTO> addReview(@RequestBody RatingDTO ratingDTO, Authentication authentication) {
        String mail = authentication.getName();
        User user = userService.getUserByEmail(mail);

        Rating existingRating = ratingService.getRatingByUserIdAndProductId(user.getId(), ratingDTO.getProductId());

        if (existingRating != null) {
            return ResponseEntity.badRequest().body(new RatingDTO());
        } else {
            ratingService.addRating(ratingDTO, user);
            return ResponseEntity.ok(ratingDTO);
        }
    }


}

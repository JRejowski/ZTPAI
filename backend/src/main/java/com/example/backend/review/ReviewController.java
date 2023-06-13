package com.example.backend.review;

import com.example.backend.user.User;
import com.example.backend.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/reviews")
@CrossOrigin(origins="http://localhost:3000")
public class ReviewController {

    private final ReviewService reviewService;
    private final UserService userService;

    @Autowired
    public ReviewController(ReviewService reviewService, UserService userService) {
        this.reviewService = reviewService;
        this.userService = userService;
    }

    @GetMapping("/product/{productId}")
    public List<Review> getReviewsByProductId(@PathVariable Long productId) {
        return reviewService.getReviewsByProductId(productId);
    }

    @GetMapping("/user")
    public List<Review> getReviewsByUserId(Authentication authentication){
        String mail = authentication.getName();
        User user = userService.getUserByEmail(mail);
        Long userId = user.getId();

        return reviewService.getReviewsByUserId(userId);
    }

    @PostMapping("/add")
    public ResponseEntity<ReviewDTO> addReview(@RequestBody ReviewDTO reviewDTO, Authentication authentication) {
        log.info(reviewDTO.toString());
        String mail = authentication.getName();
        User user = userService.getUserByEmail(mail);
        reviewService.addReview(reviewDTO,user);
        return ResponseEntity.ok(reviewDTO);
    }


}

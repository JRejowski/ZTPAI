package com.example.backend.services;

import com.example.backend.models.Review;
import com.example.backend.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getReviewsByProductId(Long productId) {
        return reviewRepository.findByProductId(productId);
    }
}

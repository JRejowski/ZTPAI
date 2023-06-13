package com.example.backend.review;

import com.example.backend.product.ProductService;
import com.example.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final ProductService productService;


    @Autowired
    public ReviewService(ReviewRepository reviewRepository, ProductService productService) {
        this.reviewRepository = reviewRepository;

        this.productService = productService;
    }

    public List<Review> getReviewsByProductId(Long productId) {
        return reviewRepository.findByProductId(productId);
    }

    public List<Review> getReviewsByUserId(Long userId) {
        return reviewRepository.findByUserId(userId);
    }

    public void addReview(ReviewDTO reviewDTO, User user) {
        var review =Review.builder()
                .reviewText(reviewDTO.getReviewText())
                .product(productService.getProductById(reviewDTO.getProductId()))
                .user(user)
                .build();
        reviewRepository.save(review);
    }
}



package com.example.backend.rating;

import com.example.backend.product.ProductService;
import com.example.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {
    private final RatingRepository ratingRepository;
    private ProductService productService;

    @Autowired
    public RatingService(RatingRepository ratingRepository, ProductService productService) {
        this.ratingRepository = ratingRepository;
        this.productService = productService;
    }

    public List<Rating> getRatingsByUserId(Long userId) {
        return ratingRepository.findByUserId(userId);
    }

    public void addRating(RatingDTO ratingDTO, User user) {
        var rating = Rating.builder()
                .ratingValue(ratingDTO.getRatingValue())
                .product(productService.getProductById(ratingDTO.getProductId()))
                .user(user)
                .build();
        ratingRepository.save(rating);

    }

    public Rating getRatingByUserIdAndProductId(Long userId, Long productId){
        return ratingRepository.findByUserIdAndProductId(userId, productId);
    }

}

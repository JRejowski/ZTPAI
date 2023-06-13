package com.example.backend.rating;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {

    List<Rating> findByUserId(Long userId);

    Rating findByUserIdAndProductId(Long userId, Long productId);

}


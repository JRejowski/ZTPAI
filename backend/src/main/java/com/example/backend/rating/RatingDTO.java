package com.example.backend.rating;

import lombok.Data;

@Data
public class RatingDTO {
    private Long productId;
    private int ratingValue;
}

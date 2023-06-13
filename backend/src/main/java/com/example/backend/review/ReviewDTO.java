package com.example.backend.review;

import lombok.Data;

@Data
public class ReviewDTO {
    private Long productId;
    private String reviewText;
}

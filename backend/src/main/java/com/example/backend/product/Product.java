package com.example.backend.product;

import com.example.backend.rating.Rating;
import com.example.backend.review.Review;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String producer;
    private String category;
    private String img;
    private double ranking;

    @OneToMany (mappedBy = "product")
    @JsonIgnore
    private List<Review> reviews;

    @OneToMany (mappedBy = "product")
    @JsonIgnore
    private List<Rating> ratings;

}

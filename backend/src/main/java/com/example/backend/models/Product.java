package com.example.backend.models;

import jakarta.persistence.*;
import lombok.*;


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

}

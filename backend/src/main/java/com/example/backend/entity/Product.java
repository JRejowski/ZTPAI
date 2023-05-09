package com.example.backend.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Collection;

@Entity
public class Product {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "name", nullable = false, length = 100)
    private String name;
    @Basic
    @Column(name = "description", nullable = false, length = 255)
    private String description;
    @Basic
    @Column(name = "producer", nullable = false, length = 50)
    private String producer;
    @Basic
    @Column(name = "category", nullable = false, length = 50)
    private String category;
    @Basic
    @Column(name = "rating", nullable = false, precision = 1)
    private BigDecimal rating;
    @OneToMany(mappedBy = "productByProductId")
    private Collection<FavouriteProduct> favouriteProductsById;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getRating() {
        return rating;
    }

    public void setRating(BigDecimal rating) {
        this.rating = rating;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Product product = (Product) o;

        if (id != product.id) return false;
        if (name != null ? !name.equals(product.name) : product.name != null) return false;
        if (description != null ? !description.equals(product.description) : product.description != null) return false;
        if (producer != null ? !producer.equals(product.producer) : product.producer != null) return false;
        if (category != null ? !category.equals(product.category) : product.category != null) return false;
        if (rating != null ? !rating.equals(product.rating) : product.rating != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (producer != null ? producer.hashCode() : 0);
        result = 31 * result + (category != null ? category.hashCode() : 0);
        result = 31 * result + (rating != null ? rating.hashCode() : 0);
        return result;
    }

    public Collection<FavouriteProduct> getFavouriteProductsById() {
        return favouriteProductsById;
    }

    public void setFavouriteProductsById(Collection<FavouriteProduct> favouriteProductsById) {
        this.favouriteProductsById = favouriteProductsById;
    }
}

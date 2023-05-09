package com.example.backend.entity;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "name", nullable = false, length = 100)
    private String name;
    @Basic
    @Column(name = "email", nullable = false, length = 100)
    private String email;
    @Basic
    @Column(name = "password", nullable = false, length = 255)
    private String password;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<FavouriteProduct> favouriteProductsById;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<ProductRatings> productRatingsById;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<ProductReview> productReviewsById;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (id != user.id) return false;
        if (name != null ? !name.equals(user.name) : user.name != null) return false;
        if (email != null ? !email.equals(user.email) : user.email != null) return false;
        if (password != null ? !password.equals(user.password) : user.password != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        return result;
    }

    public Collection<FavouriteProduct> getFavouriteProductsById() {
        return favouriteProductsById;
    }

    public void setFavouriteProductsById(Collection<FavouriteProduct> favouriteProductsById) {
        this.favouriteProductsById = favouriteProductsById;
    }

    public Collection<ProductRatings> getProductRatingsById() {
        return productRatingsById;
    }

    public void setProductRatingsById(Collection<ProductRatings> productRatingsById) {
        this.productRatingsById = productRatingsById;
    }

    public Collection<ProductReview> getProductReviewsById() {
        return productReviewsById;
    }

    public void setProductReviewsById(Collection<ProductReview> productReviewsById) {
        this.productReviewsById = productReviewsById;
    }
}

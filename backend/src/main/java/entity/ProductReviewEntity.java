package entity;

import jakarta.persistence.*;

@Entity
@Table(name = "product_review", schema = "public", catalog = "postgres")
public class ProductReviewEntity {
    @Basic
    @Column(name = "user_id")
    private int userId;
    @Basic
    @Column(name = "product_id")
    private int productId;
    @Basic
    @Column(name = "review")
    private String review;
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id", nullable = false)
    private ProductEntity productByProductId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProductReviewEntity that = (ProductReviewEntity) o;

        if (userId != that.userId) return false;
        if (productId != that.productId) return false;
        if (review != null ? !review.equals(that.review) : that.review != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + productId;
        result = 31 * result + (review != null ? review.hashCode() : 0);
        return result;
    }

    public ProductEntity getProductByProductId() {
        return productByProductId;
    }

    public void setProductByProductId(ProductEntity productByProductId) {
        this.productByProductId = productByProductId;
    }
}

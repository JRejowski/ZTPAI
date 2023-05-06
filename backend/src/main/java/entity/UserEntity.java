package entity;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
@Table(name = "user", schema = "public", catalog = "postgres")
public class UserEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "email")
    private String email;
    @Basic
    @Column(name = "password")
    private String password;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<FavouriteProductEntity> favouriteProductsById;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<ProductRatingsEntity> productRatingsById;
    @OneToMany(mappedBy = "userByUserId")
    private Collection<ProductReviewEntity> productReviewsById;

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

        UserEntity that = (UserEntity) o;

        if (id != that.id) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (email != null ? !email.equals(that.email) : that.email != null) return false;
        if (password != null ? !password.equals(that.password) : that.password != null) return false;

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

    public Collection<FavouriteProductEntity> getFavouriteProductsById() {
        return favouriteProductsById;
    }

    public void setFavouriteProductsById(Collection<FavouriteProductEntity> favouriteProductsById) {
        this.favouriteProductsById = favouriteProductsById;
    }

    public Collection<ProductRatingsEntity> getProductRatingsById() {
        return productRatingsById;
    }

    public void setProductRatingsById(Collection<ProductRatingsEntity> productRatingsById) {
        this.productRatingsById = productRatingsById;
    }

    public Collection<ProductReviewEntity> getProductReviewsById() {
        return productReviewsById;
    }

    public void setProductReviewsById(Collection<ProductReviewEntity> productReviewsById) {
        this.productReviewsById = productReviewsById;
    }
}

package entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user_following", schema = "public", catalog = "postgres")
public class UserFollowingEntity {
    @Basic
    @Column(name = "id_follower")
    private int idFollower;
    @Basic
    @Column(name = "id_following")
    private int idFollowing;
    @ManyToOne
    @JoinColumn(name = "id_follower", referencedColumnName = "id", nullable = false)
    private UserEntity userByIdFollower;
    @ManyToOne
    @JoinColumn(name = "id_following", referencedColumnName = "id", nullable = false)
    private UserEntity userByIdFollowing;

    public int getIdFollower() {
        return idFollower;
    }

    public void setIdFollower(int idFollower) {
        this.idFollower = idFollower;
    }

    public int getIdFollowing() {
        return idFollowing;
    }

    public void setIdFollowing(int idFollowing) {
        this.idFollowing = idFollowing;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserFollowingEntity that = (UserFollowingEntity) o;

        if (idFollower != that.idFollower) return false;
        if (idFollowing != that.idFollowing) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idFollower;
        result = 31 * result + idFollowing;
        return result;
    }

    public UserEntity getUserByIdFollower() {
        return userByIdFollower;
    }

    public void setUserByIdFollower(UserEntity userByIdFollower) {
        this.userByIdFollower = userByIdFollower;
    }

    public UserEntity getUserByIdFollowing() {
        return userByIdFollowing;
    }

    public void setUserByIdFollowing(UserEntity userByIdFollowing) {
        this.userByIdFollowing = userByIdFollowing;
    }
}

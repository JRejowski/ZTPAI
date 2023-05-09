package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user_following", schema = "public", catalog = "postgres")
public class UserFollowing {
    @Basic
    @Column(name = "id_follower", nullable = false)
    private int idFollower;
    @Basic
    @Column(name = "id_following", nullable = false)
    private int idFollowing;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @ManyToOne
    @JoinColumn(name = "id_follower", referencedColumnName = "id", nullable = false)
    private User userByIdFollower;
    @ManyToOne
    @JoinColumn(name = "id_following", referencedColumnName = "id", nullable = false)
    private User userByIdFollowing;

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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserFollowing that = (UserFollowing) o;

        if (idFollower != that.idFollower) return false;
        if (idFollowing != that.idFollowing) return false;
        if (id != that.id) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idFollower;
        result = 31 * result + idFollowing;
        result = 31 * result + id;
        return result;
    }

    public User getUserByIdFollower() {
        return userByIdFollower;
    }

    public void setUserByIdFollower(User userByIdFollower) {
        this.userByIdFollower = userByIdFollower;
    }

    public User getUserByIdFollowing() {
        return userByIdFollowing;
    }

    public void setUserByIdFollowing(User userByIdFollowing) {
        this.userByIdFollowing = userByIdFollowing;
    }
}

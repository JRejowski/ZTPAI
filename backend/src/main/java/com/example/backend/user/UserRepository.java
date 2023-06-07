package com.example.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByLogin(String login);
    User findByEmail(String email);
    boolean existsByLogin(String login);
    boolean existsByEmail(String email);

}
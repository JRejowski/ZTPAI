package com.example.backend.security.auth;

import com.example.backend.security.jwt.JWTService;
import com.example.backend.security.jwt.token.Token;
import com.example.backend.security.jwt.token.TokenService;
import com.example.backend.security.jwt.token.TokenType;
import com.example.backend.user.User;
import com.example.backend.user.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .login(request.getLogin())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .image(request.getImage())
                .build();

        userRepository.save(user);
        var token = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(user,token);
        return AuthenticationResponse.builder(
                )
                .token(token)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword())
        );
        var user = userRepository.findByEmail(request.getEmail());
        var token = jwtService.generateToken(user);
        revokeTokens(user);
        saveUserToken(user,token);
        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }

    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;
        if(authHeader==null || !authHeader.startsWith("Bearer ")){
            return;
        }
        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractEmail(refreshToken);
        if (userEmail != null) {
            var user = userRepository.findByEmail(userEmail);
            if (jwtService.isTokenValid(refreshToken,user)){
                var token = jwtService.generateToken(user);
                revokeTokens(user);
                saveUserToken(user,token);
                var authResponse = AuthenticationResponse.builder()
                        .token(token)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(),authResponse);
            }
        }
    }

    private void saveUserToken(User user, String token) {
        var tokenEntity = Token.builder()
                .token(token)
                .user(user)
                .tokenType(TokenType.BEARER)
                .revoked(false)
                .expired(false)
                .createdAt(Timestamp.valueOf(LocalDateTime.now()))
                .build();
        tokenService.saveToken(tokenEntity);
    }

    private void revokeTokens(User user) {
        var validTokens = tokenService.getAllValidTokenByUser(user.getId());
        if (validTokens.isEmpty()) return;
        validTokens.forEach(token -> {
            token.setRevoked(true);
        });
        tokenService.saveAllTokens(validTokens);
    }


}
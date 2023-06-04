package com.example.backend.controllers;

import com.example.backend.models.Product;
import com.example.backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
        Product product = productService.getProductById(productId);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
        List<Product> products = productService.getProductsByCategorySortedByRankingDesc(category);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam("query") String query) {
        List<Product> products = productService.searchProducts(query);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}

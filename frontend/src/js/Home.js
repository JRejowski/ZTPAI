import React, { useEffect, useState } from "react";
import Navigation from "../components/Nav";
import SearchBar from "../components/SearchBar";
import "../css/home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import whey from '../whey.jpg'

function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/products",{
                headers: {
                    'authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                setProducts(response.data);
            }
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    const handleSearch = (query) => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="base-container">
            <Navigation />
            <main>
                <SearchBar onSearch={handleSearch} />
                <section className="supplements">
                    {(filteredProducts.length > 0 ? filteredProducts : products).map(
                        (product) => (
                            <div className="product" key={product.id}>
                                <img
                                    src={whey}
                                    alt={product.name}
                                />
                                <Link to={`/products/${product.id}`}>
                                    <h4>{product.name}</h4>
                                </Link>
                            </div>
                        )
                    )}
                </section>
            </main>
        </div>
    );
}

export default Home;

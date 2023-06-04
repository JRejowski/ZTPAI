import React, { useEffect, useState } from "react";
import Navigation from "../components/Nav";
import SearchBar from "../components/SearchBar";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:8080/products");
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
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
                                    src={`/../../public/img/${product.img}`}
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

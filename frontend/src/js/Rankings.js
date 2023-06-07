import React, { useState, useEffect } from "react";
import Navigation from "../components/Nav";
import CategoryPicker from "../components/CategoryPicker";

import '../css/rankings.css'

function Rankings() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (selectedCategory) {
            fetchProductsByCategory(selectedCategory);
        }
    }, [selectedCategory]);

    const fetchProductsByCategory = async (category) => {
        try {
            const response = await fetch(`http://localhost:8080/products/category/${category}`,{
                headers: {
                    'authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                console.log("Błąd podczas pobierania danych");
            }
        } catch (error) {
            console.log("Błąd podczas pobierania danych", error);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="base-container">
            <Navigation />
            <main>
                <h1>Top supplements</h1>
                <CategoryPicker onCategoryChange={handleCategoryChange} />
                <div>
                    {products.map((product, index) => (
                        <div className='products' key={product.id}>
                            <h1>{index + 1}</h1>
                            <img src={`../../public/img/${product.img}`} alt={product.name} />
                            <a>{product.name}</a>
                            <a>{product.ranking}</a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Rankings;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Nav";

import '../css/product.css';

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8080/products/${productId}`,{
                    headers: {
                        'authorization': 'Bearer '+localStorage.getItem('token'),
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                }
            } catch (error) {
                console.log("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    useEffect(() => {
        if (product) {
            fetchReviews(product.id);
        }
    }, [product]);

    useEffect(() => {
        console.log(reviews); // Dodaj ten log
    }, [reviews]);

    const fetchReviews = async (productId) => {
        try {
            const response = await fetch(`http://localhost:8080/reviews/product/${productId}`,{
                headers: {
                    'authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                setReviews(data);
            }
        } catch (error) {
            console.log("Error fetching reviews:", error);
        }
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmitComment = () => {
        // Tutaj możesz dodać logikę wysyłania opinii do serwera lub inną odpowiednią logikę obsługi opinii
        console.log("Opinia:", comment);
        // Możesz także zresetować pole tekstowe po wysłaniu opinii
        setComment("");
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="base-container">
            <Navigation />
            <main>
                <section className="product-details">
                    <h2>{product.name}</h2>
                    <div className="product-info">
                        <img src={`/../../public/img/${product.img}`} alt={product.name} />
                        <p>{product.description}</p>
                        <p>Ocena produktu: {product.ranking}/10</p>
                    </div>
                </section>

                <section className="product-rating">
                    <h2>Oceń produkt!</h2>
                    <select value={rating} onChange={handleRatingChange}>
                        <option value={0}>Wybierz ocenę</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </section>

                <section className="product-comments">
                    <h2>Opinions</h2>
                    <div className="comment-form">
                        <textarea
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Wpisz swoją opinię"
                        />
                        <button onClick={handleSubmitComment}>Dodaj opinię</button>
                    </div>
                    {reviews.map((review) => (
                        <div key={review.id} className="comment">
                            <h4>{review.user.login}</h4>
                            <p>{review.reviewText}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Product;

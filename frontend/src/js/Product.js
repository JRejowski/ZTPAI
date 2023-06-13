import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Nav";
import whey from '../whey.jpg'
import '../css/product.css';

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
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
        console.log(reviews);
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


    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };
    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value);
        setRating(selectedRating);
    };


    const handleSubmitComment = async () => {
        try {
            const response = await fetch("http://localhost:8080/reviews/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    productId: productId,
                    reviewText: comment,
                }),
            });

            if (response.ok) {
                const reviewDTO = await response.json();
                console.log("Dodano opinię:", reviewDTO);
                setComment("");
            } else {
                console.log("Błąd dodawania opinii:", response.statusText);
            }
        } catch (error) {
            console.log("Błąd dodawania opinii:", error);
        }
    };

    const handleSubmitRating = async () => {
        try {
            const response = await fetch("http://localhost:8080/ratings/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    productId: productId,
                    ratingValue: rating,
                }),
            });

            if (response.ok) {
                const ratingDTO = await response.json();
                console.log("Dodano ocenę:", ratingDTO);
                setRating(0);
            } else {
                console.log("Błąd dodawania oceny:", response.statusText);
            }
        } catch (error) {
            console.log("Błąd dodawania oceny:", error);
        }
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
                        <img className='product-img' src={whey} alt={product.name} />
                        <p>{product.description}</p>
                        <p>Ocena produktu: {product.ranking}/10</p>
                    </div>
                </section>

                <section className="product-rating">
                    <h2>Oceń produkt!</h2>
                    <select value={rating} onChange={handleRatingChange}>
                    <option value={0}>Wybierz ocenę</option>
                        {[...Array(10)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => handleSubmitRating(document.querySelector('select').value)}>
                        Oceń
                    </button>
                </section>


                <section className="product-add-comment">
                    <h2>Opinions</h2>
                    <div className="comment-form">
                        <textarea
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Wpisz swoją opinię"
                        />
                        <button onClick={handleSubmitComment}>Dodaj opinię</button>
                    </div>
                </section>
                <section className="product-comments">
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/modals.css';

function ReviewedByMe() {
    const [modal, setModal] = useState(false);
    const [reviews, setReviews] = useState([]);

    const toggleModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get("http://localhost:8080/reviews/user", {
                    headers: {
                        'authorization': 'Bearer '+localStorage.getItem('token'),
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'
                    },
                });

                if (response.status === 200) {
                    const reviewsData = response.data;
                    setReviews(reviewsData);
                } else {
                    console.log("Failed to fetch reviews.");
                }
            } catch (error) {
                console.log("Error fetching reviews:", error);
            }
        };

        if (modal) {
            fetchReviews();
        }
    }, [modal]);

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                my reviews
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="reviewed-products">
                            {reviews.map((review) => (
                                <div key={review.id}>

                                    <p>Product: {review.product.name}</p>
                                    <p>Review Text: {review.reviewText}</p>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ReviewedByMe;

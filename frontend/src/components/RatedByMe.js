import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/modals.css';

function RatedByMe() {
    const [modal, setModal] = useState(false);
    const [ratedProducts, setRatedProducts] = useState([]);

    const toggleModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        const fetchRatedProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8080/ratings/user", {
                    headers: {
                        'authorization': 'Bearer '+localStorage.getItem('token'),
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'
                    },
                });

                if (response.status === 200) {
                    const ratedProductsData = response.data;
                    setRatedProducts(ratedProductsData);
                } else {
                    console.log("Failed to fetch rated products.");
                }
            } catch (error) {
                console.log("Error fetching rated products:", error);
            }
        };

        if (modal) {
            fetchRatedProducts();
        }
    }, [modal]);

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                rated by me
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="rated-products">
                            {ratedProducts.map((rating) => (
                                <div key={rating.id}>
                                    <p>Product: {rating.product.name}</p>
                                    <p>Rating: {rating.ratingValue}</p>
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

export default RatedByMe;

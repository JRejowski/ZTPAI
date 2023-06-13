import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import '../css/modals.css';


function DeleteAccountModal() {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setModal(!modal);
    };


    const handleDeleteAccount = () => {
        // Wykonaj żądanie HTTP, aby usunąć konto użytkownika z backendu
        const deleteAccount = async () => {
            try {
                const response = await fetch("http://localhost:8080/users/user/delete", {
                    method: "DELETE",
                    headers: {
                        'authorization': 'Bearer ' + localStorage.getItem('token'),
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    navigate('/login');
                } else {
                    console.log("Usuwanie konta nie powiodło się.");
                }
            } catch (error) {
                console.log("Błąd podczas usuwania konta:", error);
            }
        };

        // Wywołaj funkcję usuwania konta
        deleteAccount();
    };

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                delete account
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Are you sure you want to delete your account?</h2>
                        <button className="submit" type="submit" onClick={handleDeleteAccount}>
                            Delete
                        </button>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}
export default DeleteAccountModal;
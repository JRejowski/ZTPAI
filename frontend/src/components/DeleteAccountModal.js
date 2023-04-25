import React, { useState } from "react";
import '../css/modals.css';


function DeleteAccountModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
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
                        <form>
                        <input name="passwd" type="password" placeholder="Confirm with your password"/>
                        <button className="submit" type="submit">Delete</button>
                        </form>
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
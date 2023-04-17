import React, { useState } from "react";
import '../css/modals.css';


function ChangePasswordModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                change password
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form>
                            <input name="passwordOld" type="password" placeholder="Old Password"/>
                            <input name="passwordNew" type="password" placeholder="New Password"/>
                            <input name="passwordNewRepeat" type="password" placeholder="Repeat New Password"/>
                            <button className="submit" type="submit">Submit</button>
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
export default ChangePasswordModal;
import React, { useState } from 'react';
import Navigation from "../components/Nav";
import ChangePasswordModal from "../components/ChangePasswordModal";
import ChangeEmailModal from "../components/ChangeEmailModal";
import  '../css/settings.css';
import DeleteAccountModal from "../components/DeleteAccountModal";




function Settings(){

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="base-container">
            <Navigation/>
            <main>
                <h1>Settings</h1>
                <ChangePasswordModal/>
                <ChangeEmailModal/>
                <DeleteAccountModal/>
            </main>
        </div>
    );
}

export default Settings
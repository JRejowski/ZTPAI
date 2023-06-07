import React, { useEffect, useState } from "react";
import Navigation from "../components/Nav";
import RatedByMe from "../components/RatedByMe";
import ReviewedByMe from "../components/ReviewedByMe";
import axios from "axios";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await axios.get("http://localhost:8080/users/user",{
                headers: {
                    'authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                setUser(response.data);
            }
        } catch (error) {
            console.log("Error fetching user:", error);
        }
    };

    return (
        <div className="base-container">
            <Navigation />
            <main>
                <h1>{user ? user.login : "ProfileName"}</h1>
                <RatedByMe />
                <ReviewedByMe />
            </main>
        </div>
    );
}

export default Profile;

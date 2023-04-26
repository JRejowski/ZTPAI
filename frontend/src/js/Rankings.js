import Navigation from "../components/Nav";
import React from "react";
import CategoryPicker from "../components/CategoryPicker";



function Rankings(){
    return (
        <div className="base-container">
            <Navigation/>
            <main>
                <h1>Top supplements</h1>
                <CategoryPicker/>

            </main>
        </div>
    );
}

export default Rankings
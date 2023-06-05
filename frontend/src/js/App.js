import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile  from './Profile';
import Settings from './Settings';
import Rankings from "./Rankings";
import Product from "./Product";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/products/:productId" element={<Product/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/settings" element={<Settings/>} />
                    <Route path="/rankings" element={<Rankings/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


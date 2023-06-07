import '../css/loginregister.css'
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginContainer() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        const requestData = {
            email: email,
            password: password
        };

        // Tutaj umieść logikę do wysłania żądania HTTP, np. z użyciem funkcji fetch
        fetch("http://localhost:8080/auth/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
            .then(response => response.json())
            .then(data => {
                const token = data.token;
                // Zapisz token do localStorage lub kontekstu, aby móc go użyć później
                localStorage.setItem("token",token);
                // Przekierowanie do innej ścieżki po pomyślnym uwierzytelnieniu
                navigate("/home");
            })
            .catch(error => {
                // Obsłuż błędy uwierzytelniania
                console.log(error);
            });
    }

    return (
        <div className="login-container">
            <form className="login" onSubmit={handleLogin}>
                <input
                    name="email"
                    type="text"
                    placeholder="email@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button id="login" type="submit">LOGIN</button>
                <Link id="non-registered-button" to="/register">
                    Not registered? Register now!
                </Link>
            </form>
        </div>
    );
}

export default LoginContainer;

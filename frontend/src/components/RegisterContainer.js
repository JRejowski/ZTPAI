import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterContainer() {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [image] = useState("temp.jpg"); // Domyślna wartość dla pola "image"


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Wysłanie żądania POST do backendu
        try {
            const response = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    login,
                    email,
                    password,
                    repeatPassword,
                    image, // Dodanie pola "image" do danych rejestracyjnych
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Rejestracja zakończona pomyślnie
                console.log(data);

            } else {
                // Obsługa błędów rejestracji
                console.error(data);
            }
        } catch (error) {
            console.error("Wystąpił błąd", error);
        }
    };
    return (
        <div className="login-container">
            <form className="register" onSubmit={handleSubmit}>
                <input
                    name="login"
                    type="text"
                    placeholder="login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
                <input
                    name="email"
                    type="text"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    name="repeatPassword"
                    type="password"
                    placeholder="repeat password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                />
                <button id="login" type="submit">
                    REGISTER
                </button>
                <Link id="non-registered-button" to="/login">
                    Already registered? Log in!
                </Link>
            </form>
        </div>
    );
}

export default RegisterContainer;

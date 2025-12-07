import "./styles/welcome.css";
import logo from "../assets/images/kebab.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Welcome() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setLoading(true); // Affiche un message ou animation
        setTimeout(() => {
            navigate("/home");
        }, 1500);
    };

    return (
        <div className="welcome_center">
            <img src={logo} alt="logo" />
            <p>Hello, Hello !<br />Kebab-enjoyers</p>
            <button type="button" onClick={handleClick} disabled={loading}>
                {loading ? "Loading..." : "🥙 Start"}
            </button>
        </div>
    );
}


import "./styles/welcome.css";
import logo from "../assets/images/DALL·E 2024-12-05 10.32.35 - Create a logo design for 'Kebab Monsters', a fun and quirky brand. The logo should feature a cartoon-style kebab with a playful monster face, includin.webp"
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
            <p>Hello, Hello, Kebab-enjoyers</p>
            <button type="button" onClick={handleClick} disabled={loading}>
                {loading ? "Loading..." : "🥙 Start"}
            </button>
        </div>
    );
}


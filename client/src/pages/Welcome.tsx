import "./styles/welcome.css";
import logo from "../assets/images/DALL·E 2024-12-05 10.32.35 - Create a logo design for 'Kebab Monsters', a fun and quirky brand. The logo should feature a cartoon-style kebab with a playful monster face, includin.webp"
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <>
            <div className="welcome_center">
                <img src={logo} alt="logo" />
                <p>Hello, Hello, Kebab enjoyers</p>
                <Link to="/">
                    <button type="button">Start</button>
                </Link>
            </div>
        </>
    )
}

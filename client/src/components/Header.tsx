import kebab from "../assets/images/kebab.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<section className="header">
			<Link to="/">
				<img src={kebab} id="logo" alt="Logo_kebab_maps" />
			</Link>
			<div className="title">
				<h1>KEBAB MONSTERS</h1>
			</div>
			<div className="useless" />
		</section>
	);
}

export default Header;

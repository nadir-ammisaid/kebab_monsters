import { useContext } from "react";
import KebabContext from "../contexts/KebabContext";
import type { KebabContextType } from "../contexts/KebabContext";
import { useParams } from "react-router-dom";
function Details() {
	const kebabsData = useContext(KebabContext) as KebabContextType;
	const { kebabs } = kebabsData;
	if (!kebabs || !kebabs.businesses) {
		return <p>Chargement des détails...</p>;
	}
	const { id } = useParams(); // Récupère l'ID du kebab depuis l'URL
	const business = kebabs.businesses.find((business) => business.id === id);
	if (!business) {
		return <p>Business not found!</p>;
	}
	return (
		<section className="kebab-details">
			<section className="kebab-card">
				<img
					src={business.image_url}
					alt={business.name}
					className="kebab-poster"
				/>
				<div className="kebab-info">
					<div id="title-favorite">
						<h1>{business.name}</h1>
					</div>
					<p id="phone">Téléphone: {business.display_phone}</p>
					<p id="rating">Rating: {business.rating || "Non noté"}</p>
					<p id="url">
						Site Internet: {business.business_url || "URL non disponible"}
					</p>
				</div>
			</section>
		</section>
	);
}
export default Details;

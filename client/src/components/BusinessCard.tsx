import { useContext } from "react";
import KebabContext from "../contexts/KebabContext";
import type { KebabContextType } from "../contexts/KebabContext";
import "./BusinessCard.css";

function BusinessCard() {
	const kebabsData = useContext(KebabContext) as KebabContextType;
	//tester la data
	//console.log(kebabsData);

	const { kebabs, searchText } = kebabsData;

	// Filtrer les kebabs en fonction du texte de recherche
	const filteredKebabs = kebabs.businesses?.filter((business) =>
		business.name.toLowerCase().includes(searchText.toLowerCase()),
	);

	return (
		<section>
			{filteredKebabs?.map((business) => (
				<div key={business.id} className="businessCard">
					<h3>{business.name}</h3>
					<img
						className="cardArtImg"
						src={business.image_url}
						alt={business.name}
					/>
				</div>
			))}
		</section>
	);
}

export default BusinessCard;

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
					<p key={business.id}> Téléphone: {business.display_phone}</p>
					<p key={business.id}>
						{""}
						Rating: {business.rating || "Non noté"}
					</p>
					<p key={business.id}>
						{""}
						Adresse:{" "}
						{business.location.display_address || "Aucune adresse renseignée"}
					</p>

					<img
						src={
							business.image_url
								? business.image_url
								: "https://www.mondialkebab.com/wp-content/uploads/2022/02/manger-un-kebab-c-est-bien-mais-avec-moderation.jpg"
						}
						alt={business.name}
					/>
				</div>
			))}
		</section>
	);
}

export default BusinessCard;

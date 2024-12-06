import { useContext } from "react";
import KebabContext from "../contexts/KebabContext";
import type { KebabContextType } from "../contexts/KebabContext";
import "./BusinessCard.css";
import { Link } from "react-router-dom";

function BusinessCard() {
	const kebabsData = useContext(KebabContext) as KebabContextType;
	//tester la data
	//console.log(kebabsData);

	const { filteredKebabs } = kebabsData;

	// Filtrer les kebabs en fonction du texte de recherche

	return (
		<section>
			{filteredKebabs?.map((business) => (
				<Link key={business.id} to={`/details/${business.id}`}>
					<div key={business.id} className="businessCard">
						<h3>{business.name}</h3>

						<p key={business.id}>
							{""}
							Rating: {business.rating || "Non noté"}
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
				</Link>
			))}
		</section>
	);
}

export default BusinessCard;

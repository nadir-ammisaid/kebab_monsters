import { useContext } from "react";
import KebabContext from "../contexts/KebabContext";
import type { KebabContextType } from "../contexts/KebabContext";

function DetailCard() {
	const kebabsData = useContext(KebabContext) as KebabContextType;
	//tester la data
	//console.log(kebabsData);

	const { kebabs, setKebabs } = kebabsData;
	return (
		<>
			<h1>Hello </h1>
			{kebabs.businesses?.map((business) => (
				<h3 key={business.id}>{business.name}</h3>
			))}
		</>
	);
}

export default DetailCard;

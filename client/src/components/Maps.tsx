import { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import KebabContext from "../contexts/KebabContext";
import type { KebabContextType } from "../contexts/KebabContext";
import "../App.css";
import { Link } from "react-router-dom";

export default function Maps() {
	const kebabsData = useContext(KebabContext) as KebabContextType;

	// Vérifiez si les données sont correctement reçues
	console.log("Kebabs data:", kebabsData);

	// Si le contexte est mal initialisé, retournez un message de chargement
	if (!kebabsData) {
		return <p>Chargement des données...</p>;
	}

	const { filteredKebabs } = kebabsData;

	return (
		<MapContainer center={[45.183331, 0.71667]} zoom={5} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{filteredKebabs.map((kebab) => (
				<Marker
					key={kebab.id}
					position={[kebab.coordinates.latitude, kebab.coordinates.longitude]}
				>
					<Popup className="popup">
						<Link key={kebab.id} to={`/details/${kebab.id}`}>
							<div key={kebab.id} className="popCard">
								<h3>{kebab.name}</h3>
								<p key={kebab.id}>
									{""}
									Rating: {kebab.rating || "Non noté"}
								</p>
								<img src={kebab.image_url} alt={kebab.name} />
							</div>
						</Link>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}

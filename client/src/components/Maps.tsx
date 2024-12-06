import { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import KebabContext from "../contexts/KebabContext";
import type { KebabContextType } from "../contexts/KebabContext";
import "../App.css";

export default function Maps() {
	const kebabsData = useContext(KebabContext) as KebabContextType;

	// Vérifiez si les données sont correctement reçues
	console.log("Kebabs data:", kebabsData);

	// Si le contexte est mal initialisé, retournez un message de chargement
	if (!kebabsData) {
		return <p>Chargement des données...</p>;
	}

	const { kebabs } = kebabsData;

	return (
		<MapContainer
			center={[48.8645158, 2.3454019]}
			zoom={13}
			scrollWheelZoom={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{kebabs.businesses.map((kebab) => (
				<Marker
					key={kebab.id}
					position={[kebab.coordinates.latitude, kebab.coordinates.longitude]}
				>
					<Popup>
						<strong>Kebab:</strong> {kebab.name}
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}

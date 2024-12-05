import { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import KebabContext from "../contexts/KebabContext";

export default function Maps() {
	const { kebabs } = useContext(KebabContext);

	return (
		<MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{kebabs.map(
				(
					kebab, // récupère les données de breweries dans le useContext ce qui correspond aux API fetchées
				) => (
					<Marker key={kebab.id} position={[kebab.latitude, kebab.longitude]}>
						<Popup className="pop-up"></Popup>
					</Marker>
				),
			)}
		</MapContainer>
	);
}

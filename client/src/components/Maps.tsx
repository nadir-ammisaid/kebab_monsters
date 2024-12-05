import "../App.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useKebab } from "../contexts/KebabContext";

export default function Maps() {
	const { kebabs } = useKebab();

	return (
		<MapContainer center={[48.8645, 2.3454]} zoom={13} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{kebabs.map((kebab) => (
				<Marker
					key={kebab.id}
					position={[kebab.coordinates.latitude, kebab.coordinates.longitude]}
				>
					<Popup>
						<strong>Kebab ID:</strong> {kebab.id}
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}

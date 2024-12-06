import "../App.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useKebab } from "../contexts/KebabContext";

export default function Maps() {
	const { kebabs } = useKebab();
	return (
		<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{/* {kebabs.map((kebab) => ( */}
			<Marker position={[51.505, -0.09]}>
				<Popup>This is a popup</Popup>
			</Marker>
			{/* ))} */}
		</MapContainer>
	);
}

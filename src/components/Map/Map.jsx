import classes from "./map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const MapC = (props) => {
	function SetViewOnClick(props) {
		const map = useMap();
		map.setView(props.coords, map.getZoom());

		return null;
	}
	return (
		<MapContainer
			center={[`${props.coords.lat}`, `${props.coords.lng}`]}
			zoom={12}
			scrollWheelZoom={false}
			style={{ width: "100%", height: "100%" }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<SetViewOnClick coords={[props.coords.lat, props.coords.lng]} />
		</MapContainer>
	);
};

export default MapC;

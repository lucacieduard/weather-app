import classes from "./map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const MapC = (props) => {
	function SetViewOnClick(props) {
		const map = useMap();
		map.flyTo(props.coords, 12);

		return null;
	}
	return (
		<MapContainer
			center={[`${props.coords.lat}`, `${props.coords.lng}`]}
			zoom={12}
			scrollWheelZoom={true}
			className={classes.map}
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

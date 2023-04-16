import classes from "./navBar.module.css";
import CoordsToCity from "../../utils/CoordsToCity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GeoLocationPiker = () => {
	const [showlocationMessage, setShowLocationMessage] = useState(false);
	const [declineLocation, setDeclineLocation] = useState(false);
	const navigate = useNavigate();

	const clickHandler = async () =>
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				const { latitude, longitude } = position.coords;
				const city = await CoordsToCity(latitude, longitude);
				if (city) {
					navigate(`/${city}/acum`);
				}
			},
			(error) => {
				setDeclineLocation(true);
			}
		);
	return (
		<div
			className={classes.icon_navbar}
			onMouseEnter={() => setShowLocationMessage(true)}
			onMouseLeave={() => setShowLocationMessage(false)}
			onClick={clickHandler}
		>
			<FontAwesomeIcon icon={faLocationPin} />
			{showlocationMessage && (
				<p className={classes.use_location_message}>
					{`${
						declineLocation
							? "Acces la locație respins"
							: "Folosește locația actuală"
					}`}
				</p>
			)}
		</div>
	);
};

export default GeoLocationPiker;

import React from "react";
import classes from "./individualPageMain.module.css";
import {
	faTemperatureHigh,
	faWind,
	faCompass,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import sunrise_img from "../../assets/image/sunrise.svg";
import sunset_img from "../../assets/image/sunset.svg";
import DataCard from "./DataCard";

import MapC from "../Map/Map";

export default function IndividualPageMain(props) {
	return (
		<div className={classes.main}>
			<div className={classes.info_container}>
				<div className={classes.info}>
					<DataCard
						icon={faTemperatureHigh}
						title="Temperatură"
						value={props.currentWeather.temperature}
						unit="°C"
					/>
					<DataCard
						icon={faTemperatureHigh}
						title="Temperatură minima"
						value={props.daily.temperature_2m_min}
						unit="°C"
					/>
					<DataCard
						icon={faTemperatureHigh}
						title="Temperatură maxima"
						value={props.daily.temperature_2m_max}
						unit="°C"
					/>
					<DataCard
						img={sunrise_img}
						title="Rasarit"
						value={`${props.daily.sunrise[0].split("T")[1]}`}
						unit=""
					/>
					<DataCard
						img={sunset_img}
						title="Apus"
						value={`${props.daily.sunset[0].split("T")[1]}`}
						unit=""
					/>
					<DataCard
						icon={faWind}
						title="Viteza vantului"
						value={props.currentWeather.windspeed}
						unit="km/h"
					/>

					<DataCard
						icon={faSun}
						title="Indice UV maxim"
						value={props.daily.uv_index_max}
						unit=""
					/>
					<DataCard
						icon={faCompass}
						title="Directia vantului"
						value={props.currentWeather.winddirection}
						unit="°"
					/>
				</div>
			</div>
			<div className={classes.map}>
				<MapC coords={{ lat: props.lat, lng: props.lng }} />
			</div>
		</div>
	);
}

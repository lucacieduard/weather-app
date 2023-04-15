import Parameter from "./Parameter/Parameter";
import classes from "./citySummary.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTemperatureLow,
	faWind,
	faCompass,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import MapC from "../Map/Map";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import GeoConvertor from "../../utils/GeoLocationConverter";
import coords from "../../utils/coords";
import weatherCode from "../../utils/weatherCode";

const CitySummary = (props) => {
	const [data, setData] = useState({});
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function FetchData() {
			try {
				const { city, lat, lng, countryCode } = await GeoConvertor(
					`${props.city}`
				);

				const response = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&timezone=Europe%2FBucharest&current_weather=true`
				);

				const data = await response.json();

				const arr = data.current_weather.time.split("T");
				console.log(arr);
				setData({
					city: city,
					lat,
					lng,
					countryCode,
					temperature: data.current_weather.temperature,
					last_update: data.current_weather.time,
					watherCode: data.current_weather.weathercode,
					winddirection: data.current_weather.winddirection,
					windspeed: data.current_weather.windspeed,
				});
			} catch (error) {
				setIsError(true);
				console.log(error);
			}
		}

		FetchData();
	}, [props.city]);

	return (
		<div className={classes.summary_container}>
			<div className={classes.summary}>
				{!isError && (
					<>
						<div className={classes.info}>
							<h2 className={classes.cityName}>
								{data.city} ({data.countryCode})
							</h2>
							{data.last_update && (
								<p className={classes.lastUpdate}>
									Actualizat la:{" "}
									{`${data.last_update.split("T")[0]} ${
										data.last_update.split("T")[1]
									}`}
								</p>
							)}
						</div>
						<div className={classes.summary_parameters}>
							<Parameter
								type="Temperatura"
								value={data.temperature}
								unit="°C"
								icon={
									<FontAwesomeIcon
										icon={faTemperatureLow}
										style={{ width: "30px", height: "30px" }}
									/>
								}
							/>
							<Parameter
								type="Viteza vantului"
								value={data.windspeed}
								unit="km/h"
								icon={
									<FontAwesomeIcon
										icon={faWind}
										style={{ width: "30px", height: "30px" }}
									/>
								}
							/>
							<Parameter
								type="Directia vantului"
								value={data.winddirection}
								unit="°"
								icon={
									<FontAwesomeIcon
										icon={faCompass}
										style={{ width: "30px", height: "30px" }}
									/>
								}
							/>
							<p className={classes.codeMessage}>
								Status : {weatherCode[data.watherCode]}
							</p>
							<Link
								to={`/${props.city}/acum`}
								style={{ textDecoration: "none" }}
								className={classes.button}
							>
								<span>Vremea detaliata {props.city}</span>
								<FontAwesomeIcon icon={faArrowRight} />
							</Link>
						</div>
					</>
				)}
			</div>
			<div className={classes.map}>
				<MapC coords={coords[props.city]} />
			</div>
		</div>
	);
};

export default CitySummary;

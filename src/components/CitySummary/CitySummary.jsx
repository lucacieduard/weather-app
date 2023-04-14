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

const CitySummary = (props) => {
	const coords = {
		București: {
			lat: 44.43225,
			lng: 26.10626,
		},
		"Cluj Napoca": { lat: 46.770439, lng: 23.591423 },
		Brașov: {
			lat: 45.657975,
			lng: 25.601198,
		},
		Iași: {
			lat: 47.151726,
			lng: 27.587914,
		},
		Sibiu: {
			lat: 45.792784,
			lng: 24.152069,
		},
		Brussels: {
			lat: 50.85045,
			lng: 4.34878,
		},
		Rome: {
			lat: 41.902782,
			lng: 12.496366,
		},
		Paris: {
			lat: 48.856613,
			lng: 2.352222,
		},
		Madrid: {
			lat: 40.416775,
			lng: -3.70379,
		},
		Budapest: {
			lat: 47.497913,
			lng: 19.040236,
		},
	};
	return (
		<div className={classes.summary_container}>
			<div className={classes.summary}>
				<div className={classes.info}>
					<h2 className={classes.cityName}>{props.city}</h2>
					<p className={classes.lastUpdate}>Actualizat la: 13/04/2023 13:34</p>
				</div>
				<div className={classes.summary_parameters}>
					<Parameter
						type="Temperatura"
						value="20"
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
						value="18"
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
						value="300"
						unit="°"
						icon={
							<FontAwesomeIcon
								icon={faCompass}
								style={{ width: "30px", height: "30px" }}
							/>
						}
					/>
					<p className={classes.codeMessage}>Status : Code message</p>
					<Link
						to={`/${props.city}/acum`}
						style={{ textDecoration: "none" }}
						className={classes.button}
					>
						<span>Vremea detaliata {props.city}</span>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
			<div className={classes.map}>
				<MapC coords={coords[props.city]} />
			</div>
		</div>
	);
};

export default CitySummary;

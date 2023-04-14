import CardCity from "./CardCity";
import classes from "./mainCity.module.css";
import { useState } from "react";
import CitySummary from "../CitySummary/CitySummary";

const MainCity = (props) => {
	const aCity = props.activeCity;
	const [activeCity, setActiveCity] = useState(aCity);
	const listaOrase = props.orase.map((oras, i) => {
		return (
			<li key={i} onClick={() => setActiveCity(props.orase[i])}>
				<CardCity
					cityName={props.orase[i]}
					image={props.imagini[i]}
					active={activeCity}
				/>
			</li>
		);
	});

	return (
		<div className={classes.mainCity_container}>
			<h1 className={classes.mainCity_title}>{props.title}</h1>
			<ul className={classes.mainCity_list}>{listaOrase}</ul>
			<CitySummary city={activeCity} />
		</div>
	);
};

export default MainCity;

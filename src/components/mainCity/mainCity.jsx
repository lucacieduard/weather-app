import CardCity from "./CardCity";
import classes from "./mainCity.module.css";
import bucuresti from "../../assets/image/bucuresti.jpg";
import cluj from "../../assets/image/cluj.jpg";
import iasi from "../../assets/image/iasi.jpg";
import sibiu from "../../assets/image/sibiu.jpg";
import brasov from "../../assets/image/brasov.jpg";
import { useState } from "react";
import CitySummary from "../CitySummary/CitySummary";

const MainCity = () => {
	const [activeCity, setActiveCity] = useState("București");
	return (
		<div className={classes.mainCity_container}>
			<h1 className={classes.mainCity_title}>Orașe populare</h1>
			<ul className={classes.mainCity_list}>
				<li onClick={() => setActiveCity("București")}>
					<CardCity
						cityName="București"
						image={bucuresti}
						active={activeCity}
					/>
				</li>
				<li onClick={() => setActiveCity("Cluj Napoca")}>
					<CardCity cityName="Cluj Napoca" image={cluj} active={activeCity} />
				</li>
				<li onClick={() => setActiveCity("Brașov")}>
					<CardCity cityName="Brașov" image={brasov} active={activeCity} />
				</li>
				<li onClick={() => setActiveCity("Iași")}>
					<CardCity cityName="Iași" image={iasi} active={activeCity} />
				</li>
				<li onClick={() => setActiveCity("Sibiu")}>
					<CardCity cityName="Sibiu" image={sibiu} active={activeCity} />
				</li>
			</ul>
			<CitySummary city={activeCity} />
		</div>
	);
};

export default MainCity;

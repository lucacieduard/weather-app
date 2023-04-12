import CardCity from "./CardCity";
import classes from "./mainCity.module.css";
import bucuresti from "../../assets/image/bucuresti.jpg";
import cluj from "../../assets/image/cluj.jpg";
import iasi from "../../assets/image/iasi.jpg";
import sibiu from "../../assets/image/sibiu.jpg";
import brasov from "../../assets/image/brasov.jpg";

const MainCity = () => {
	return (
		<div className={classes.mainCity_container}>
			<h1 className={classes.mainCity_title}>Orașe populare</h1>
			<ul className={classes.mainCity_list}>
				<li>
					<CardCity cityName="București" image={bucuresti} />
				</li>
				<li>
					<CardCity cityName="Cluj Napoca" image={cluj} />
				</li>
				<li>
					<CardCity cityName="Brașov" image={brasov} />
				</li>
				<li>
					<CardCity cityName="Iași" image={iasi} />
				</li>
				<li>
					<CardCity cityName="Sibiu" image={sibiu} />
				</li>
			</ul>
		</div>
	);
};

export default MainCity;

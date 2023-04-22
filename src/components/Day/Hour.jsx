import classes from "./hour.module.css";
import { weatherCode } from "../../utils/weatherCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCloud,
	faCloudBolt,
	faCloudMeatball,
	faCloudRain,
	faCloudShowersHeavy,
	faCloudSun,
	faCloudSunRain,
	faSmog,
	faSnowflake,
	faSun,
	faTemperature4,
	faWind,
} from "@fortawesome/free-solid-svg-icons";
const weatherIcons = {
	0: <FontAwesomeIcon icon={faSun} className={classes.hide} />,
	1: <FontAwesomeIcon icon={faSun} className={classes.hide} />,
	2: <FontAwesomeIcon icon={faCloudSun} className={classes.hide} />,
	3: <FontAwesomeIcon icon={faCloud} className={classes.hide} />,
	45: <FontAwesomeIcon icon={faSmog} className={classes.hide} />,
	48: <FontAwesomeIcon icon={faSmog} className={classes.hide} />,
	51: <FontAwesomeIcon icon={faCloudRain} className={classes.hide} />,
	53: <FontAwesomeIcon icon={faCloudRain} className={classes.hide} />,
	55: <FontAwesomeIcon icon={faCloudRain} className={classes.hide} />,
	56: <FontAwesomeIcon icon={faCloudRain} className={classes.hide} />,
	57: <FontAwesomeIcon icon={faCloudRain} className={classes.hide} />,
	61: <FontAwesomeIcon icon={faSun} className={classes.hide} />,
	63: <FontAwesomeIcon icon={faSun} className={classes.hide} />,
	65: <FontAwesomeIcon icon={faCloudShowersHeavy} className={classes.hide} />,
	66: <FontAwesomeIcon icon={faCloudMeatball} className={classes.hide} />,
	67: <FontAwesomeIcon icon={faCloudMeatball} className={classes.hide} />,
	71: <FontAwesomeIcon icon={faSnowflake} className={classes.hide} />,
	73: <FontAwesomeIcon icon={faSnowflake} className={classes.hide} />,
	75: <FontAwesomeIcon icon={faSnowflake} className={classes.hide} />,
	77: <FontAwesomeIcon icon={faSnowflake} className={classes.hide} />,
	80: <FontAwesomeIcon icon={faCloudSunRain} className={classes.hide} />,
	81: <FontAwesomeIcon icon={faCloudSunRain} className={classes.hide} />,
	82: <FontAwesomeIcon icon={faCloudSunRain} className={classes.hide} />,
	85: <FontAwesomeIcon icon={faCloudMeatball} className={classes.hide} />,
	86: <FontAwesomeIcon icon={faCloudMeatball} className={classes.hide} />,
	95: <FontAwesomeIcon icon={faCloudBolt} className={classes.hide} />,
	96: <FontAwesomeIcon icon={faCloudBolt} className={classes.hide} />,
	99: <FontAwesomeIcon icon={faCloudBolt} className={classes.hide} />,
};

export default function Hour(props) {
	return (
		<ul className={classes.hour}>
			<li className={classes.item}>
				<span className={classes.time}>{props.time}</span>
			</li>
			<li className={classes.item}>
				<div className={classes.status}>
					{weatherIcons[props.wCode]}
					{weatherCode[props.wCode]}
				</div>
			</li>
			<li className={classes.item}>
				<FontAwesomeIcon icon={faTemperature4} />
				<span className={classes.value}>{props.temperature} °C</span>
			</li>
			<li className={classes.item}>
				<FontAwesomeIcon icon={faCloudRain} />
				<span className={classes.value}>{props.precipitation}%</span>
			</li>
			<li className={classes.item}>
				<FontAwesomeIcon icon={faWind} />
				<span className={classes.value}>{props.windspeed}km/h</span>
			</li>
		</ul>
	);
}

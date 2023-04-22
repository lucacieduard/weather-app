import classes from "./day.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowDown,
	faArrowUp,
	faChevronRight,
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
} from "@fortawesome/free-solid-svg-icons";
import Hour from "./Hour";
import { weatherCode } from "../../utils/weatherCode";
import { useParams } from "react-router-dom";
import { useState } from "react";
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

export default function Day(props) {
	const [openTable, setOpenTable] = useState(false);
	const params = useParams();

	const hours = [
		"00:00",
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
	];
	return (
		<div className={classes.day}>
			<ul className={classes.header_list}>
				<li className={classes.item}>{props.time}</li>
				<div className={`${classes.status}  ${classes.item}`}>
					<li className={classes.hide}>
						{weatherIcons[props.day_weatherCode]}
					</li>
					<li>{weatherCode[props.day_weatherCode]}</li>
				</div>

				<li className={`${classes.parameter} ${classes.item}`}>
					<span>
						<FontAwesomeIcon icon={faArrowUp} style={{ color: "green" }} />
					</span>
					<span>{props.temperature_max} °C</span>{" "}
				</li>
				<li className={`${classes.parameter} ${classes.item}`}>
					<span>
						<FontAwesomeIcon icon={faArrowDown} style={{ color: "red" }} />
					</span>{" "}
					<span>{props.temperature_min} °C</span>
				</li>
				<li className={`${classes.hide}  ${classes.item}`}>
					<span>
						<FontAwesomeIcon icon={faCloudSunRain} />
					</span>
					<span style={{ marginLeft: "3px" }}>
						{props.precipitation_mean} %
					</span>
				</li>
				<li
					className={`${classes.button} ${classes.item}`}
					onClick={() => setOpenTable((prev) => !prev)}
				>
					<span>Mai mult</span>{" "}
					<FontAwesomeIcon
						icon={faChevronRight}
						className={`${classes.icon_dropdown}  ${
							openTable ? `${classes.icon_active}` : ""
						}`}
					/>
				</li>
			</ul>

			{openTable && (
				<div className={classes.table}>
					{hours.map((hour, i) => (
						<Hour
							key={i}
							time={hour}
							temperature={props.hourlyTemperature[i]}
							precipitation={props.hourlyprecipitation[i]}
							wCode={props.hourlyWeatherCode[i]}
							windspeed={props.windspeed[i]}
						/>
					))}
				</div>
			)}
		</div>
	);
}

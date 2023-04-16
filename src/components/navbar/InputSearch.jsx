import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./navBar.module.css";
import {
	faLocationPin,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GeoLocationPiker from "./GeoLocation";

const InputSearch = () => {
	const inputRef = useRef();
	const [city_list, setCityList] = useState(null);
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const changeHandler = async (ref) => {
		try {
			const response = await fetch(
				`https://geocoding-api.open-meteo.com/v1/search?name=${ref}&count=3&language=en&format=json`
			);
			if (!response.ok) {
				throw Error();
			}
			const data = await response.json();
			if (!data.results) {
				setCityList(null);
				throw Error("Nu am gasit niciun oraș cu acest nume, reformuleaza");
			}
			setError(false);
			console.log(data);
			const city_list = data.results.map((city) => {
				return (
					<li
						onClick={() => {
							navigate(`/${city.name}/acum`);
							setCityList(null);
						}}
					>
						{city.name} ({city.country})
					</li>
				);
			});
			setCityList(city_list);
		} catch (error) {
			setError(true);
		}
	};

	return (
		<div className={classes.navbar_right}>
			<div className={classes.search}>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				<input
					type="text"
					placeholder="Caută un oraș"
					ref={inputRef}
					onChange={() => changeHandler(inputRef.current.value)}
				/>

				{city_list && (
					<div className={classes.list_input}>
						<ul>{city_list}</ul>
					</div>
				)}
				{error && inputRef.current.value.length > 2 && (
					<p className={classes.input_error}>Niciun rezultat, reformulează</p>
				)}
			</div>
			<GeoLocationPiker />
		</div>
	);
};

export default InputSearch;

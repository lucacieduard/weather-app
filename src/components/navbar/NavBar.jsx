import classes from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faArrowRight,
	faUser,
	faLocationPin,
	faXmark,
	faHamburger,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
	const [showlocationMessage, setShowLocationMessage] = useState(false);
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const [city_list, setCityList] = useState(null);
	const [error, setError] = useState(false);
	const inputRef = useRef();
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
		<div className={classes.navBar}>
			<div className={`${classes.hamburger_icon} ${classes.hide}`}>
				<FontAwesomeIcon icon={faBars} onClick={props.showSideBar} />
			</div>
			<div className={classes.date}>
				{new Date()
					.toLocaleDateString("ro-RO", { weekday: "long" })
					.toLocaleUpperCase()}
				<span className={classes.date_color}>
					{new Date().toLocaleDateString("ro-RO", { day: "numeric" })}{" "}
					{new Date().toLocaleDateString("ro-RO", { month: "long" })},{" "}
					{new Date().toLocaleDateString("ro-RO", { year: "numeric" })}
				</span>
			</div>
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
				<div
					className={classes.icon_navbar}
					onMouseEnter={() => setShowLocationMessage(true)}
					onMouseLeave={() => setShowLocationMessage(false)}
				>
					<FontAwesomeIcon icon={faLocationPin} />
					{showlocationMessage && (
						<p className={classes.use_location_message}>
							Folosește locația actuală
						</p>
					)}
				</div>
			</div>
			<div className={classes.icon_navbar}>
				<FontAwesomeIcon
					icon={faUser}
					className={classes.icon_navbar_hover}
					onClick={() => setShowProfileMenu(true)}
				/>
				{showProfileMenu && (
					<ul className={classes.profile_list}>
						<FontAwesomeIcon
							icon={faXmark}
							className={classes.x}
							onClick={() => setShowProfileMenu(false)}
						/>
						<h4 className={classes.profile_name}>Eduard</h4>
						<li className={classes.option}>Contul meu</li>
						<li className={classes.option}>Orașe salvate</li>
						<li className={classes.option}>Deconectare</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default NavBar;

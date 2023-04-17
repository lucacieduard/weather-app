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
import { useState } from "react";
import InputSearch from "./InputSearch";

const NavBar = (props) => {
	const [showProfileMenu, setShowProfileMenu] = useState(false);

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
			<InputSearch />
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

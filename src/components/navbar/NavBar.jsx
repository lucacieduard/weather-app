import classes from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	return (
		<div className={classes.navBar}>
			<div className={classes.date}>
				Luni<span>4 ianuarie, 2023</span>
			</div>
			<div className={classes.search}>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				<input type="text" placeholder="Caută un oraș" />
			</div>
		</div>
	);
};

export default NavBar;

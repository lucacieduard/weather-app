import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	return (
		<div className="navBar">
			<FontAwesomeIcon icon={faMagnifyingGlass} className="search" />{" "}
		</div>
	);
};

export default NavBar;

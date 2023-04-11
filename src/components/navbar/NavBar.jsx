import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	return (
		<div className="navBar">
			<FontAwesomeIcon icon={faEnvelope} />
		</div>
	);
};

export default NavBar;

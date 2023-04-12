import classes from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faArrowRight,
	faUser,
	faLocationPin,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
	const [showlocationMessage, setShowLocationMessage] = useState(false);
	const [showProfileMenu, setShowProfileMenu] = useState(false);

	return (
		<div className={classes.navBar}>
			<div className={classes.date}>
				Luni<span className={classes.date_color}>4 ianuarie, 2023</span>
			</div>
			<div className={classes.navbar_right}>
				<div className={classes.search}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<input type="text" placeholder="Caută un oraș" />
					<FontAwesomeIcon icon={faArrowRight} className={classes.enter_icon} />
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

import classes from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCloudBolt,
	faTableCellsLarge,
	faBookmark,
	faArrowRightToBracket,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
	return (
		<div className={classes.sidebar}>
			<div className={classes.sidebar_header}>
				<FontAwesomeIcon icon={faCloudBolt} className={classes.logo} />
				<h1 className={classes.logo_text}>meTEO</h1>
			</div>
			<div className={classes.sidebar_content}>
				<ul className={classes.sidebar_navigation}>
					<li>
						<FontAwesomeIcon icon={faTableCellsLarge} />
						<p>Acasă</p>
					</li>
					<li>
						<FontAwesomeIcon icon={faBookmark} />
						<p>Orase salvate</p>
					</li>
				</ul>
			</div>
			<div className={classes.sidebar_footer}>
				<ul>
					<li>
						<FontAwesomeIcon icon={faArrowRightToBracket} />
						<p>Intră în cont</p>
					</li>
					<li>
						<FontAwesomeIcon icon={faUserPlus} />
						<p>Creează un cont</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;

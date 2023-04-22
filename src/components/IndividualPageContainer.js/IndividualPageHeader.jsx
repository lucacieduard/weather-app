import classes from "./individualPageHeader.module.css";
import { NavLink, useParams } from "react-router-dom";

function IndividualPageHeader(props) {
	const { city } = useParams();

	return (
		<div className={classes.header}>
			<h1 className={classes.cityName}>
				{props.city} ({props.countryCode})
			</h1>
			<ul className={classes.navList}>
				<NavLink
					to={`/${city}/acum
`}
					style={{ textDecoration: "none", color: "inherit" }}
					className={({ isActive, isPending }) => {
						return isActive ? `${classes.activeLink}` : "";
					}}
				>
					<li className={classes.navItem}>Acum</li>
				</NavLink>
				<NavLink
					to={`/${city}/3/zile`}
					style={{ textDecoration: "none", color: "inherit" }}
					className={({ isActive, isPending }) => {
						return isActive ? `${classes.activeLink}` : "";
					}}
				>
					<li className={classes.navItem}>3 zile</li>
				</NavLink>
				<NavLink
					to={`/${city}/7/zile`}
					style={{ textDecoration: "none", color: "inherit" }}
					className={({ isActive, isPending }) => {
						return isActive ? `${classes.activeLink}` : "";
					}}
				>
					<li className={classes.navItem}>7 zile</li>
				</NavLink>
			</ul>
		</div>
	);
}

export default IndividualPageHeader;

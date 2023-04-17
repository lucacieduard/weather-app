import { useEffect, useState } from "react";
import classes from "./individualPageHeader.module.css";
import GeoConvertor from "../../utils/GeoLocationConverter";
import { NavLink, useParams } from "react-router-dom";

function IndividualPageHeader(props) {
	const { city } = useParams();
	console.log(city);
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function FetchData() {
			try {
				setLoading(true);
				const data = await GeoConvertor(city);
				console.log(data);
				setData(data);
				setLoading(false);
			} catch (error) {}
		}
		FetchData();
	}, [city]);
	return (
		<div className={classes.header}>
			{loading && <p>Loading ...</p>}
			{!loading && (
				<>
					<h1 className={classes.cityName}>
						{data.city} ({data.countryCode})
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
				</>
			)}
		</div>
	);
}

export default IndividualPageHeader;

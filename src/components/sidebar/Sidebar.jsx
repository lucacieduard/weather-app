import classes from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCloudBolt,
	faTableCellsLarge,
	faBookmark,
	faArrowRightToBracket,
	faUserPlus,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = (props) => {
	console.log(props.showNav);
	return (
		<div
			className={`${classes.sidebar} ${
				props.showNav ? "" : `${classes.hide_side}`
			}`}
		>
			<div className={classes.sidebar_header}>
				<FontAwesomeIcon icon={faCloudBolt} className={classes.logo} />
				<h1 className={classes.logo_text}>meTEO</h1>
				<FontAwesomeIcon
					icon={faXmark}
					onClick={() => props.changeShowSideBar()}
					className={`${classes.xmark} ${classes.hide}`}
				/>
			</div>
			<div className={classes.sidebar_content}>
				<ul className={classes.sidebar_navigation}>
					<NavLink
						to="/"
						style={{ textDecoration: "none", color: "inherit" }}
						className={({ isActive, isPending }) => {
							return isActive ? `${classes.activeLink}` : "";
						}}
					>
						<li>
							<FontAwesomeIcon icon={faTableCellsLarge} />
							<p>Acasă</p>
						</li>
					</NavLink>
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

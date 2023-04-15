import { useState } from "react";
import PageContainer from "../../../UI/PageContainer/PageCointainer";

import NavBar from "../../../components/navbar/NavBar";
import Sidebar from "../../../components/sidebar/Sidebar";
import classes from "./single.module.css";
import { useParams } from "react-router-dom";

const Single = () => {
	const { city } = useParams();
	const [showSideBar, setShowSideBar] = useState(false);

	function showSideBarHandler() {
		setShowSideBar((prev) => !prev);
	}
	return (
		<div className={classes.page}>
			<Sidebar showNav={showSideBar} changeShowSideBar={showSideBarHandler} />
			<div className={classes.container}>
				<PageContainer>
					<NavBar showSideBar={showSideBarHandler} />
					<p>Oras {city}</p>
				</PageContainer>
			</div>
		</div>
	);
};

export default Single;

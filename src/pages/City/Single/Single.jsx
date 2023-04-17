import { useState } from "react";
import PageContainer from "../../../UI/PageContainer/PageCointainer";

import NavBar from "../../../components/navbar/NavBar";
import Sidebar from "../../../components/sidebar/Sidebar";
import classes from "./single.module.css";
import IndividualPageHeader from "../../../components/IndividualPageContainer.js/IndividualPageHeader";
import { useParams } from "react-router-dom";

const Single = () => {
	const [showSideBar, setShowSideBar] = useState(false);
	const { city } = useParams();
	const [loading, setLoading] = useState(false);

	function showSideBarHandler() {
		setShowSideBar((prev) => !prev);
	}

	return (
		<div className={classes.page}>
			<Sidebar showNav={showSideBar} changeShowSideBar={showSideBarHandler} />
			<div className={classes.container}>
				<PageContainer>
					<NavBar showSideBar={showSideBarHandler} />
					<IndividualPageHeader />
				</PageContainer>
			</div>
		</div>
	);
};

export default Single;

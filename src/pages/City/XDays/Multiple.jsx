import { useEffect, useState } from "react";
import PageContainer from "../../../UI/PageContainer/PageCointainer";

import NavBar from "../../../components/navbar/NavBar";
import Sidebar from "../../../components/sidebar/Sidebar";
import classes from "./multiple.module.css";
import IndividualPageHeader from "../../../components/IndividualPageContainer.js/IndividualPageHeader";

const Single = () => {
	const [showSideBar, setShowSideBar] = useState(false);

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
					{loading && <p>loading</p>}
					{!loading && <IndividualPageHeader />}
				</PageContainer>
			</div>
		</div>
	);
};

export default Single;

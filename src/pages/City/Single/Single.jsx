import PageContainer from "../../../UI/PageContainer/PageCointainer";
import MainCity from "../../../components/mainCity/mainCity";
import NavBar from "../../../components/navbar/NavBar";
import Sidebar from "../../../components/sidebar/Sidebar";
import classes from "./single.module.css";
import { useParams } from "react-router-dom";

const Single = () => {
	const { city } = useParams();
	return (
		<div className={classes.page}>
			<Sidebar />
			<div className={classes.container}>
				<PageContainer>
					<NavBar />
					<p>Oras {city}</p>
				</PageContainer>
			</div>
		</div>
	);
};

export default Single;

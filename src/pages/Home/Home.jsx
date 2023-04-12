import classes from "./home.module.css";
import NavBar from "../../components/navbar/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import MainCity from "../../components/mainCity/mainCity";
import PageContainer from "../../UI/PageContainer/PageCointainer";
const Home = () => {
	return (
		<div className={classes.page}>
			<Sidebar />
			<div className={classes.container}>
				<NavBar />
				<PageContainer>
					<MainCity />
				</PageContainer>
			</div>
		</div>
	);
};

export default Home;

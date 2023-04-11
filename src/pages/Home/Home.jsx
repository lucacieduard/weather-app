import classes from "./home.module.css";
import NavBar from "../../components/navbar/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
const Home = () => {
	return (
		<div className={classes.page}>
			<Sidebar />
			<NavBar />
		</div>
	);
};

export default Home;

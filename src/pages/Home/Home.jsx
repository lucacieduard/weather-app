import classes from "./home.module.css";
import NavBar from "../../components/navbar/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import MainCity from "../../components/mainCity/mainCity";
import PageContainer from "../../UI/PageContainer/PageCointainer";
import bucuresti_img from "../../assets/image/bucuresti.jpg";
import brasov_img from "../../assets/image/brasov.jpg";
import sibiu_img from "../../assets/image/sibiu.jpg";
import iasi_img from "../../assets/image/iasi.jpg";
import cluj_img from "../../assets/image/cluj.jpg";
import bruxelles_img from "../../assets/image/bruxelles.jpg";
import budapesta_img from "../../assets/image/budapesta.jpg";
import madrid_img from "../../assets/image/madrid.jpg";
import paris_img from "../../assets/image/paris.jpg";
import roma_img from "../../assets/image/roma.jpg";

const Home = () => {
	const romania = ["București", "Cluj Napoca", "Brașov", "Iași", "Sibiu"];
	const europa = ["Brussels", "Paris", "Rome", "Madrid", "Budapest"];
	const romania_img = [
		bucuresti_img,
		cluj_img,
		brasov_img,
		iasi_img,
		sibiu_img,
	];
	const europa_img = [
		bruxelles_img,
		paris_img,
		roma_img,
		madrid_img,
		budapesta_img,
	];
	return (
		<div className={classes.page}>
			<Sidebar />
			<div className={classes.container}>
				<PageContainer>
					<NavBar />
					<MainCity
						title="Orașe din România"
						activeCity="Sibiu"
						orase={romania}
						imagini={romania_img}
					/>
					<MainCity
						title="Orașe din Europa"
						activeCity="Rome"
						orase={europa}
						imagini={europa_img}
					/>
				</PageContainer>
			</div>
		</div>
	);
};

export default Home;

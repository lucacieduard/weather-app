import "./home.css";
import NavBar from "../../components/navbar/NavBar";
import { useParams } from "react-router-dom";
const Home = () => {
	const params = useParams();

	return (
		<>
			<NavBar />
		</>
	);
};

export default Home;

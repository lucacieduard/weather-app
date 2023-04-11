import "./single.css";
import { useParams } from "react-router-dom";

const Single = () => {
	const { city } = useParams();
	return <>City : {city}</>;
};

export default Single;

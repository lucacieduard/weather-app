import classes from "./single.module.css";
import { useParams } from "react-router-dom";

const Single = () => {
	const { city } = useParams();
	return <>City : {city}</>;
};

export default Single;

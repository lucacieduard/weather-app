import classes from "./cardCity.module.css";

const CardCity = (props) => {
	return (
		<div className={classes.card}>
			<img className={classes.card_image} src={props.image} />
			<p className={classes.card_title}>{props.cityName}</p>
		</div>
	);
};

export default CardCity;

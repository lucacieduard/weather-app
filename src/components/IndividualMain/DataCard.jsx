import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./dataCard.module.css";

export default function DataCard(props) {
	return (
		<div className={classes.card}>
			<p className={classes.name}>{props.title}</p>
			<div className={classes.card_info}>
				{props.icon && (
					<FontAwesomeIcon icon={props.icon} className={classes.icon} />
				)}
				{props.img && <img className={classes.icon} src={props.img} />}
				<p className={classes.parameter_value}>
					<span>{props.value}</span>
					<span>{props.unit}</span>
				</p>
			</div>
		</div>
	);
}

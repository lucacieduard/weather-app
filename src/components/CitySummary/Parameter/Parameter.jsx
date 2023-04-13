import classes from "./parameter.module.css";

const Parameter = (props) => {
	return (
		<div className={classes.summary_parameter}>
			<div className={classes.parameter_logo}>{props.icon}</div>
			<div className={classes.parameter_info}>
				<p className={classes.parameter_name}>{props.type}</p>
				<p className={classes.parameter_value}>
					<span>{props.value}</span>
					<span>{props.unit}</span>
				</p>
			</div>
		</div>
	);
};

export default Parameter;

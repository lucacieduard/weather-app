import classes from "./modal.module.css";

const Modal = () => {
	return (
		<div className={classes.spinner_container}>
			<div className={classes.lds_ring}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Modal;

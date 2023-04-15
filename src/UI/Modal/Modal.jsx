import classes from "./modal.module.css";

const Modal = () => {
	return (
		<div class={classes.spinner_container}>
			<div class={classes.lds_ring}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Modal;

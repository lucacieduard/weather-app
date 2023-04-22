import { useState } from "react";
import Modal from "../Modal/Modal";

export default function IndividualPageContainer(props) {
	const [loading, setLoading] = useState(false);
	return (
		<main style={{ padding: "0 2rem" }}>
			{loading ? <Modal /> : props.children}
		</main>
	);
}

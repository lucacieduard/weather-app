import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import classes from "./chart.module.css";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

export default function Chart(props) {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		interaction: {
			intersect: false,
			mode: "index",
		},
		scales: {
			x: {
				ticks: {
					display: props.displayX,
				},
			},
		},
		plugins: {
			legend: {
				position: "none",
				size: 10,
			},
			title: {
				display: true,
				text: props.title,
			},
		},
	};

	const labels = props.label;
	const data = {
		labels,
		datasets: [
			{
				fill: false,
				label: props.title,
				data: props.data,
				borderColor: "#2f69fd",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	return (
		<div className={classes.chart}>
			<Line options={options} data={data} />
		</div>
	);
}

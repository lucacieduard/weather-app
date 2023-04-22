import { useEffect, useState } from "react";
import PageContainer from "../../../UI/PageContainer/PageCointainer";
import NavBar from "../../../components/navbar/NavBar";
import Sidebar from "../../../components/sidebar/Sidebar";
import classes from "./multiple.module.css";
import IndividualPageHeader from "../../../components/IndividualPageContainer.js/IndividualPageHeader";
import Day from "../../../components/Day/Day";
import { useParams } from "react-router-dom";
import GeoConvertor from "../../../utils/GeoLocationConverter";
import Modal from "../../../UI/Modal/Modal";
import Chart from "../../../components/Chart/Chart";

const MultiplePage = () => {
	const [showSideBar, setShowSideBar] = useState(false);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState();
	const params = useParams();
	const componentsToRender = [];

	function showSideBarHandler() {
		setShowSideBar((prev) => !prev);
	}

	useEffect(() => {
		async function FetchData() {
			try {
				setLoading(true);
				const geolocationData = await GeoConvertor(params.city);
				console.log(geolocationData);
				const response = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${geolocationData.lat}&longitude=${geolocationData.lng}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,precipitation_probability,weathercode&daily=precipitation_probability_mean	,weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=${params.days}&timezone=Europe%2FBucharest`
				);

				if (!response.ok) throw new Error("Eroare API");
				const data = await response.json();
				console.log(data);
				const dates = data.daily.time.map(
					(date) => `${date.split("-")[2]}/${date.split("-")[1]}`
				);
				const hourlyTemperature = [];
				const hourlyprecipitation_probability = [];
				const hourlyWeatherCode = [];
				const windspeed = [];
				const graph_time = data.hourly.time.map(
					(date) =>
						`${date.split("T")[0].split("-")[2]}/${
							date.split("T")[0].split("-")[1]
						}-${date.split("T")[1]}`
				);

				for (let i = 0; i < 24 * params.days; i += 24) {
					const temp = data.hourly.temperature_2m.slice(i, i + 24);
					hourlyTemperature.push(temp);
					const precipitation = data.hourly.precipitation_probability.slice(
						i,
						i + 24
					);
					hourlyprecipitation_probability.push(precipitation);
					const code = data.hourly.weathercode.slice(i, i + 24);
					hourlyWeatherCode.push(code);
					const wind = data.hourly.windspeed_10m.slice(i, i + 24);
					windspeed.push(wind);
				}

				setData({
					cityName: geolocationData.city,
					countryCode: geolocationData.countryCode,
					temperature_max: data.daily.temperature_2m_max,
					temperature_min: data.daily.temperature_2m_min,
					date: dates,
					graph_temp: data.hourly.temperature_2m,
					day_weatherCode: data.daily.weathercode,
					precip_probability_mean: data.daily.precipitation_probability_mean,
					hourlyTemperature: hourlyTemperature,
					hourlyprecipitation_probability,
					hourlyWeatherCode,
					windspeed,
					graph_time,
					precipitation_probability: data.hourly.precipitation_probability,
					humidity: data.hourly.relativehumidity_2m,
				});

				setLoading(false);
			} catch (error) {}
		}
		FetchData();
	}, [params.days]);

	if (data) {
		for (let i = 0; i < params.days; i++) {
			componentsToRender.push(
				<Day
					key={i}
					temperature_max={data.temperature_max[i]}
					temperature_min={data.temperature_min[i]}
					day_weatherCode={data.day_weatherCode[i]}
					time={data.date[i]}
					hourlyTemperature={data.hourlyTemperature[i]}
					hourlyprecipitation={data.hourlyprecipitation_probability[i]}
					hourlyWeatherCode={data.hourlyWeatherCode[i]}
					windspeed={data.windspeed[i]}
					precipitation_mean={data.precip_probability_mean[i]}
				/>
			);
		}
	}

	return (
		<div className={classes.page}>
			<Sidebar showNav={showSideBar} changeShowSideBar={showSideBarHandler} />
			<div className={classes.container}>
				<PageContainer>
					<NavBar showSideBar={showSideBarHandler} />

					{loading && <Modal />}
					{!loading && data && (
						<>
							<IndividualPageHeader
								city={data?.cityName}
								countryCode={data?.countryCode}
							/>
							<div className={classes.days}>{componentsToRender}</div>
							<div className={classes.graph_container}>
								<Chart
									title={`Temperatura (°C)`}
									data={data?.graph_temp}
									label={data?.graph_time}
									displayX={false}
								/>
								<Chart
									title={`Probablitate precipitatii (%)`}
									data={data?.precipitation_probability}
									label={data?.graph_time}
									displayX={false}
								/>
								<Chart
									title={`Umiditate (%)`}
									data={data?.humidity}
									label={data?.graph_time}
									displayX={false}
								/>
							</div>
						</>
					)}
				</PageContainer>
			</div>
		</div>
	);
};

export default MultiplePage;

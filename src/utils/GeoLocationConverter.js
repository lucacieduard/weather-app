export default async function GeoConvertor(cityName) {
	const response = await fetch(
		`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=ro&format=json`
	);

	const { results } = await response.json();
	const city = results[0].name;

	const lat = results[0].latitude;
	const lng = results[0].longitude;
	const countryCode = results[0].country_code;

	return { city, lat, lng, countryCode };
}

const CoordsToCity = async (lat, lng) => {
	try {
		const response = await fetch(
			`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
		);
		if (!response.ok) throw new Error();
		const data = await response.json();
		if (data.address.village) return data.address.village;
		return data.address.city;
	} catch (err) {
		console.log(err);
	}
};

export default CoordsToCity;

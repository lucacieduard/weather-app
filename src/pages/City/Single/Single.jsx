import { useEffect, useState } from "react";
import Chart from "../../../components/Chart/Chart";
import classes from "./single.module.css";
import IndividualPageHeader from "../../../components/IndividualPageContainer.js/IndividualPageHeader";
import { useParams } from "react-router-dom";
import IndividualPageContainer from "../../../UI/IndividualPageContainer/IndividualPageContainer";
import IndividualPageMain from "../../../components/IndividualMain/IndividualPageMain";
import GeoConvertor from "../../../utils/GeoLocationConverter";
import Modal from "../../../UI/Modal/Modal";

const Single = () => {
  const { city } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  async function FetchData() {
    try {
      const data = await GeoConvertor(city);

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lng}&hourly=temperature_2m,relativehumidity_2m,precipitation,surface_pressure&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&forecast_days=1&timezone=Europe%2FBucharest`
      );

      if (!response.ok) {
        throw new Error("Eroare API");
      }
      const allData = await response.json();
      const labelTime = allData.hourly.time.map((date) => date.split("T")[1]);
      setData({
        city: data.city,
        lat: data.lat,
        lng: data.lng,
        countryCode: data.countryCode,
        weatherData: allData,
        labelTime,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchData();
  }, [city]);

  return (
    <>
      {loading ? (
        <Modal />
      ) : (
        <>
          <IndividualPageHeader
            city={data.city}
            countryCode={data.countryCode}
          />
          <IndividualPageContainer>
            <IndividualPageMain
              lat={data.lat}
              lng={data.lng}
              currentWeather={data.weatherData.current_weather}
              daily={data.weatherData.daily}
            />
            <h2 className={classes.title}>Grafice 24h</h2>
            <div className={classes.Chartcontainer}>
              <Chart
                label={data.labelTime}
                title="Temperatură (°C)"
                data={data.weatherData.hourly.temperature_2m}
                displayX={true}
              />
              <Chart
                label={data.labelTime}
                title="Umiditate %"
                data={data.weatherData.hourly.relativehumidity_2m}
                displayX={true}
              />
              <Chart
                label={data.labelTime}
                title="Precipitații (mm)"
                data={data.weatherData.hourly.precipitation}
                displayX={true}
              />
              <Chart
                label={data.labelTime}
                title="Presiune (hPa)"
                data={data.weatherData.hourly.surface_pressure}
                displayX={true}
              />
            </div>
          </IndividualPageContainer>
        </>
      )}
    </>
  );
};

export default Single;

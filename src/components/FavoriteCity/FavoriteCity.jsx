import React, { useEffect, useState } from "react";
import styles from "./favoriteCity.module.css";
import Parameter from "../CitySummary/Parameter/Parameter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperature4, faWind } from "@fortawesome/free-solid-svg-icons";
import { weatherCode } from "../../utils/weatherCode";

const FavoriteCity = (props) => {
  const [data, setData] = useState();
  console.log(data);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${props.city}&count=1&language=ro&format=json`
    );
    const cityCoords = await res.json();
    const cityRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${cityCoords.results[0].latitude}&longitude=${cityCoords.results[0].longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,surface_pressure&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&forecast_days=1&timezone=Europe%2FBucharest`
    );
    const cityData = await cityRes.json();
    setData({
      cityName: cityCoords.results[0].name,
      info: cityData.current_weather,
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [props.city]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    data && (
      <div className={styles.container}>
        <h1 className={styles.title}>Orașul tău : {data.cityName}</h1>
        <div className={styles.parameters}>
          <Parameter
            value={data.info.temperature}
            type="Temperatura"
            unit="°C"
            icon={
              <FontAwesomeIcon
                icon={faTemperature4}
                style={{ width: "30px", height: "30px" }}
              />
            }
          />
          <Parameter
            type="Viteza vantului"
            value={data.info.windspeed}
            unit="km/h"
            icon={
              <FontAwesomeIcon
                icon={faWind}
                style={{ width: "30px", height: "30px" }}
              />
            }
          />
        </div>
        <p className={styles.status}>
          Status : {weatherCode[data.info.weathercode]}
        </p>
      </div>
    )
  );
};

export default FavoriteCity;

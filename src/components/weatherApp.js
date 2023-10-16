import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm.js";
import WeatherMainInfo from "./weatherMainInfo.js";

import styles from "./weatherApp.module.css";
import "../App.css";
import Loading from "./loading.js";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.country ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "Argentina") {
    try {
      const req = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await req.json();
      setTimeout(() => {
        setWeather(json);
      }, 2000);

      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <div className="title-container">
        <h1>Weather App</h1>
        <p>
          Welcome to the Weather App Project, insert a place below for more
          weather details ⬇️
        </p>
      </div>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
}

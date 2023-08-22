import styles from "./weatherMainInfo.module.css";
import WindDirection from "./windDirection.js";

export default function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.current.condition.text}
            width="80"
          />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current.condition.text}
          </div>
          <div className={styles.current}>{weather?.current.temp_c}º</div>
        </div>
      </div>

      <div className={styles.rowRouteInfo}>
        <div className={styles.weatherPressure}>
          <div className={styles.condition}>Presión Atmosférica</div>
          <div className={styles.current}>
            {weather?.current.pressure_mb} mb
          </div>
        </div>
        <div className={styles.weatherPressure}>
          <div className={styles.condition}>Precipitación</div>
          <div className={styles.current}>{weather?.current.precip_mm}%</div>
        </div>
      </div>

      <div className={styles.rowRouteInfo}>
        <div className={styles.weatherPressure}>
          <div className={styles.condition}>Vel. Viento</div>
          <div className={styles.current}>{weather?.current.wind_kph} km/h</div>
        </div>
        <div className={styles.weatherPressure}>
          <div className={styles.condition}>Dirección del Viento</div>
          <div className={styles.current}>
            {weather?.current.wind_dir} <WindDirection weather={weather} />
          </div>
        </div>
      </div>

      <iframe
        title="maps"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d203935.29074686885!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1692623578853!5m2!1ses-419!2sar`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

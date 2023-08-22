export default function WindDirection({ weather }) {
  if (
    (weather?.current.wind_dir === "WNW") |
    (weather?.current.wind_dir === "NW") |
    (weather?.current.wind_dir === "NNW")
  )
    return "↘️";
  if (
    (weather?.current.wind_dir === "NNE") |
    (weather?.current.wind_dir === "NE") |
    (weather?.current.wind_dir === "ENE")
  )
    return "↙️";
  if (
    (weather?.current.wind_dir === "ESE") |
    (weather?.current.wind_dir === "SE") |
    (weather?.current.wind_dir === "SSE")
  )
    return "↖️";
  if (
    (weather?.current.wind_dir === "SSW") |
    (weather?.current.wind_dir === "SW") |
    (weather?.current.wind_dir === "WSW")
  )
    return "↗️";
  if (weather?.current.wind_dir === "N") return "⬇";
  if (weather?.current.wind_dir === "E") return "⬅";
  if (weather?.current.wind_dir === "S") return "⬆";
  if (weather?.current.wind_dir === "W") return "➡️";
}

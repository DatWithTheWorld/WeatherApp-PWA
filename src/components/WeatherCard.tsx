export default function WeatherCard({ data }: { data: any }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <h2 className="text-xl font-semibold">
        {data.name}, {data.sys.country}
      </h2>
      <p>{data.weather[0].description}</p>
      <p>🌡 {Math.round(data.main.temp)}°C (feels {Math.round(data.main.feels_like)}°C)</p>
      <p>💧 {data.main.humidity}% | 🌬 {data.wind.speed} m/s</p>
    </div>
  )
}

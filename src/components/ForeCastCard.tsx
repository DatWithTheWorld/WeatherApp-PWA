export default function ForecastCard({ list }: { list: any[] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Dự báo ngắn hạn (12h)</h2>
      <div className="flex gap-4 overflow-x-auto">
        {list.map((item, idx) => {
          const dt = new Date(item.dt * 1000)
          return (
            <div key={idx} className="min-w-[120px] bg-gray-100 p-3 rounded-lg">
              <p className="font-semibold">
                {dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              <p>{item.weather[0].main}</p>
              <p>🌡 {Math.round(item.main.temp)}°C</p>
              <p>💧 {item.pop ? Math.round(item.pop * 100) : 0}%</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

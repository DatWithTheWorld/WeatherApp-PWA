'use client'

import ForecastCard from '@/components/ForeCastCard'
import WeatherCard from '@/components/WeatherCard'
import { getWeatherByCity, getWeatherByCoords } from '@/lib/weather'
import { useState } from 'react'

export default function Home() {
  const [city, setCity] = useState('')
  const [current, setCurrent] = useState<any>(null)
  const [forecast, setForecast] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  async function fetchCityWeather() {
    if (!city) return
    const result = await getWeatherByCity(city)

    if ('error' in result) {
      setError(result.error)
      setCurrent(null)
      setForecast([])
    } else {
      setError(null)
      setCurrent(result.current)
      setForecast(result.forecast)
    }
  }

  async function fetchGeoWeather() {
    if (!navigator.geolocation) {
      alert('Trình duyệt không hỗ trợ geolocation')
      return
    }
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const result = await getWeatherByCoords(
        pos.coords.latitude,
        pos.coords.longitude
      )

      if ('error' in result) {
        setError(result.error)
        setCurrent(null)
        setForecast([])
      } else {
        setError(null)
        setCurrent(result.current)
        setForecast(result.forecast)
      }
    })
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600">PWA Weather</h1>

      <div className="flex gap-2 my-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Nhập tên thành phố"
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={fetchCityWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Tìm
        </button>
        <button
          onClick={fetchGeoWeather}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Vị trí
        </button>
      </div>

      {error && (
        <p className="text-red-500 mb-4">
          ❌ Lỗi: {error}
        </p>
      )}

      {current && <WeatherCard data={current} />}
      {forecast.length > 0 && <ForecastCard list={forecast} />}
    </main>
  )
}

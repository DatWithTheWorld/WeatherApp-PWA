// lib/weather.ts
const API_KEY = process.env.NEXT_PUBLIC_OWM_API_KEY
console.log("API_KEY =", API_KEY)

// Map tên thành phố sang ID OpenWeatherMap
const CITY_ID_MAP: Record<string, number> = {
  "Ha Noi": 1581130,
  "Da Nang": 1581139,
  "Ho Chi Minh": 1566083
}

type WeatherResult =
  | { current: any; forecast: any[] }
  | { error: string }

// Lấy thời tiết theo tên thành phố
export async function getWeatherByCity(city: string): Promise<WeatherResult> {
  const cityId = CITY_ID_MAP[city]
  if (!cityId) {
    return { error: "City not supported" }
  }

  try {
    // Current weather
    const current = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${API_KEY}`
    ).then(r => r.json())
    console.log("Current response:", current)

    if (!current || current.cod !== 200) {
      return { error: current?.message || "City not found" }
    }

    // Forecast 5 days / 3h
    const forecastData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${API_KEY}`
    ).then(r => r.json())
    console.log("Forecast response:", forecastData)

    if (!forecastData || forecastData.cod !== "200") {
      return { error: forecastData?.message || "Forecast not available" }
    }

    return { current, forecast: forecastData.list.slice(0, 4) }
  } catch (err: any) {
    console.error("Error fetching weather by city:", err)
    return { error: "Unexpected error" }
  }
}

// Lấy thời tiết theo toạ độ
export async function getWeatherByCoords(lat: number, lon: number): Promise<WeatherResult> {
  try {
    // Current weather
    const current = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    ).then(r => r.json())
    console.log("Current response:", current)

    if (!current || current.cod !== 200) {
      return { error: current?.message || "Weather not available" }
    }

    // Forecast 5 days / 3h
    const forecastData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    ).then(r => r.json())
    console.log("Forecast response:", forecastData)

    if (!forecastData || forecastData.cod !== "200") {
      return { error: forecastData?.message || "Forecast not available" }
    }

    return { current, forecast: forecastData.list.slice(0, 4) }
  } catch (err: any) {
    console.error("Error fetching weather by coords:", err)
    return { error: "Unexpected error" }
  }
}

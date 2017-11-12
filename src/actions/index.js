import Axious from 'axious'

const API_KEY = '6bd22748834a4bc9675c477e66af6d8d'
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

// Action creator always has to return an action (which needs to have type)
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axious.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

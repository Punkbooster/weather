import axios from 'axios'

const API_KEY = '6bd22748834a4bc9675c477e66af6d8d'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

// Action creator always has to return an action (which needs to have type)
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)


  // redux promise library looks into payload request data and checks if request is a promise
  // if it is it stop action from execution entirile and waits while the promise resolves
  // data proceeds to the reducer only after it's converted to be a request (after ajax request is finished)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

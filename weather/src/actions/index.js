import axios from 'axios'
import API_KEY from '../apiKey'

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  console.log('request: ', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

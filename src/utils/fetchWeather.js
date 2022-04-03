import { ref, reactive } from 'vue'

import { useFetch } from '../composables/useFetch'
import { store } from '../store'

const getKey = () => {
  const currentHour = Math.floor(new Date().getTime() / 3600000)
  return `${currentHour}-${store.state.locationSlug}`
}

const fetchWeather = async () => {
  store.state.loading = true
  // Log
  console.log('Fetching weather...')

  // Fetch current conditions
  const WEATHER_DBI_API_URL = 'https://weatherdbi.herokuapp.com/data/weather/'
  const getWeather = useFetch(WEATHER_DBI_API_URL + store.state.locationSlug, {
    skip: true,
    key: getKey(),
  })
  await getWeather.fetch()

  // Update State
  store.state.loading = false
  store.state.weather = reactive(getWeather.data.value)

  // Log
  console.log('Weather fetch complete.')
}

export { fetchWeather }

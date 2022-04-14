import { ref, reactive } from 'vue'

import { useFetch } from '../composables/useFetch'
import { store } from '../store'

const getKey = () => {
  const currentHour = Math.floor(new Date().getTime() / 3600000)
  return `${currentHour}-${store.state.locationSlug}`
}

const fetchWeather = async () => {
  // Loading
  store.state.loading = true

  // Log
  console.log('Fetching weather...')

  // update for https://www.7timer.info/bin/astro.php?ac=0&unit=metric&output=json&tzshift=0&lon=113.2&lat=23.1
  // Fetch current conditions
  const weatherApiUrl = `https://www.7timer.info/bin/astro.php?ac=0&unit=metric&output=json&tzshift=0&`

  // Prepare our getWeather using composable useFetch
  const getWeather = useFetch(`${weatherApiUrl}${store.state.locationSlug}`, {
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

import { ref, reactive } from 'vue'

import { useFetch } from '../composables/useFetch'
import { store } from '../store'

const getKey = () => {
  const currentHour = Math.floor(new Date().getTime() / 3600000)
  return `${currentHour}-${store.state.locationSlug}`
}

const fetchWeather = async () => {
  const loading = ref({})

  store.state.loading = true
  const METAWEATHER_PROXY =
    'https://metaweather-proxy.herokuapp.com/weather?location='

  // Log
  console.log('Fetching weather...')

  // Fetch current conditions
  const getWeather = useFetch(METAWEATHER_PROXY + store.state.locationSlug, {
    skip: true,
    key: getKey(),
  })
  try {
    await getWeather.fetch()
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Fetched weather', getWeather.data)
  }

  // Update State
  store.state.loading = loading.value = false
  store.state.weather = reactive(getWeather.data.value)

  // Log
  console.log('Weather fetch complete.')
}

export { fetchWeather }

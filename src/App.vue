<script setup>
import TodaysForecast from "./components/TodaysForecast.vue";
import WeekForecast from "./components/WeekForecast.vue";
import ChangeLocation from "./components/ChangeLocation.vue";
import Loading from "./components/Loading.vue";

import { ref, onErrorCaptured, computed } from "vue";
import { useFetch } from "./utils/useFetch";
import { store } from "./store";

const GEO_IP_LOOKUP_API_URL = "https://json.geoiplookup.io/";
const WEATHER_DBI_API_URL = "https://weatherdbi.herokuapp.com/data/weather/";

const error = ref(null);
const errorCaptured = ref(false);

/**
 * If we tick over to the next hour, we need to update the weather data.
 * Weather data is updated every hour on the hour.
 */
const currentHour = ref(Math.floor(new Date().getTime() / 3600000));
setInterval(() => {
  const expected = Math.floor(new Date().getTime() / 3600000);
  if (currentHour.value !== expected) {
    currentHour.value = expected;
  }
}, 1000);

/* Get geo location based on ip address */
console.log("Fetching location data...");
const getLocation = useFetch(GEO_IP_LOOKUP_API_URL, { skip: true });
await getLocation.fetch();
store.state.location = `${getLocation.response.value.city}+${getLocation.response.value.region}`;

/* Constructs a new key anytime location or current hour changes */
const key = computed(() => {
  return `${currentHour.value}_${store.state.location}`;
});

/* Get weather initially based on geo location */
console.log("Fetching weather data...");
const getWeather = useFetch(WEATHER_DBI_API_URL + store.state.location, {
  key: key.value,
  skip: true,
});
await getWeather.fetch();

const weather = { ...getWeather.response.value };

store.state.todaysForecast = { ...weather.currentConditions };
store.state.weekForecast = { ...weather.next_days };

console.log("weather", weather);
console.log("forecast", store.state.todaysForecast);
console.log("next days", store.state.weekForecast);

/**
 * Built-in Vue function that captures any errors that occured in async functions, sets the error flag to true, and sets our error message to display in the UI. Also console errors the error.
 */
onErrorCaptured((e) => {
  console.error(e);
  error.value = e;
  errorCaptured.value = true;
});

/**
 * Clears the error message and resets the errorCaptured flag.
 */
const clearError = () => {
  error.value = null;
  errorCaptured.value = false;
};
</script>

<template>
  <div>
    <header>
      <h1>Current Local Forecast</h1>
      <p>Developed by Ryan Roga</p>
    </header>

    <main>
      <ChangeLocation />
      <Suspense>
        <!-- nested async dependencies -->
        <template #default>
          <div class="weather-wrapper">
            <TodaysForecast />
            <WeekForecast />
          </div>
        </template>
        <!-- fallback/loading state -->
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
      <!-- Display Error on errorCaptured flag -->
      <div class="error" v-if="errorCaptured">
        <div>{{ error }}</div>
        <button type="button" @click="clearError">Clear</button>
      </div>
    </main>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

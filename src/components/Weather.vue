<script setup>
import TodaysForecast from "./TodaysForecast.vue";
import WeekForecast from "./WeekForecast.vue";
import ChangeLocation from "./ChangeLocation.vue";
import Loading from "./Loading.vue";

import { ref, computed } from "vue";
import { useFetch } from "../utils/useFetch";
import { store } from "../store";

const GEO_IP_LOOKUP_API_URL = "https://json.geoiplookup.io/";
const WEATHER_DBI_API_URL = "https://weatherdbi.herokuapp.com/data/weather/";

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
  skip: true,
});
await getWeather.fetch();
const weather = { ...getWeather.response.value };

store.state.todaysForecast = { ...weather.currentConditions };
store.state.weekForecast = { ...weather.next_days };
</script>

<template>
  <div class="weather-wrapper">
    <TodaysForecast />
    <WeekForecast />
  </div>
</template>

<style scoped>
/*  */
</style>
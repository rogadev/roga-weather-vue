<script setup>
import TodaysForecast from "./TodaysForecast.vue";
import WeekForecast from "./WeekForecast.vue";
import ChangeLocation from "./ChangeLocation.vue";
import Loading from "./Loading.vue";

import { ref, computed } from "vue";
import { store } from "../store";
import { fetchGeo } from "../utils/fetchGeo";
import { fetchWeather } from "../utils/fetchWeather";

await fetchGeo();
await fetchWeather();

/* Constructs a new key anytime location or current hour changes */
const key = computed(() => {
  return `${currentHour.value}_${store.state.locationSlug}`;
});

/**
 * If we tick over to the next hour, we need to update the weather data.
 * Weather data is updated every hour on the hour.
 */
const currentHour = ref(Math.floor(new Date().getTime() / 3600000));
setInterval(() => {
  const expected = Math.floor(new Date().getTime() / 3600000);
  if (currentHour.value !== expected) {
    currentHour.value = expected;
    fetchWeather({ key: key.value, location: location.value });
  }
}, 1000);
</script>

<template>
  <div class="weather-wrapper">
    <ChangeLocation />
    <h1 v-if="store.state.location">{{ store.state.location }}</h1>
    <TodaysForecast />
    <WeekForecast />
  </div>
</template>

<style scoped>
/*  */
</style>
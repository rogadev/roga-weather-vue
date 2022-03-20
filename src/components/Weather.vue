<script setup>
import { ref, reactive } from "vue";

import TodaysForecast from "./TodaysForecast.vue";
import WeekForecast from "./WeekForecast.vue";
import ChangeLocation from "./ChangeLocation.vue";
import Loading from "./Loading.vue";

import { fetchGeo } from "../utils/fetchGeo";
import { fetchWeather } from "../utils/fetchWeather";

import { store } from "../store";

/* Fetch Data & Set Initial Weather State */
await fetchGeo();
await fetchWeather();

/**
 * If we tick over to the next hour, we need to update the weather data.
 * Weather data is updated every hour on the hour.
 */
const currentHour = ref(Math.floor(new Date().getTime() / 3600000));
setInterval(async () => {
  const expected = Math.floor(new Date().getTime() / 3600000);
  if (currentHour.value !== expected) {
    currentHour.value = expected;
    // Update the weather data
    await fetchWeather();
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
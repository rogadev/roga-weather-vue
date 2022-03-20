<script setup>
import { ref, computed } from "vue";

import { store } from "../store";

const humidity = computed(() => {
  return store.state.weather.humidity;
});

const temp = ref(store.state.weather.temp);
</script>

<template>
  <section>
    <h1>Today's Forecast</h1>
    <div v-if="!store.state.loading">
      <p>{{ store.state.weather.currentConditions.comment }} today</p>
      <p>Currently {{ temp }}&deg;C</p>
      <p>Chance of rain: {{ store.state.weather.currentConditions.precip }}</p>
      <p>Humidity: {{ humidity }}</p>
      <img
        :src="store.state.weather.currentConditions.iconURL"
        :alt="store.state.weather.currentConditions.comment"
      />
    </div>
    <div v-else>Loading...</div>
  </section>
</template>

<style scoped>
/*  */
</style>
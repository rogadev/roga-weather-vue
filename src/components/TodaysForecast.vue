<script setup>
import { ref, computed } from "vue";

import { store } from "../store";
</script>

<template>
  <section>
    <h1>Today's Forecast</h1>
    <div v-if="!store.state.loading">
      <p>{{ store.state.weather.currentConditions.comment }} today</p>
      <p>Currently {{ store.state.weather.currentConditions.temp.c }}&deg;C</p>
      <p>Chance of rain: {{ store.state.weather.currentConditions.precip }}</p>
      <p>Humidity: {{ store.state.weather.currentConditions.humidity }}</p>
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
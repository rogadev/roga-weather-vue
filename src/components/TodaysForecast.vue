<script setup>
import { reactive } from "vue";

import { store } from "../store";

const conditions = reactive(store.state.weather.currentConditions);
</script>

<template>
  <section>
    <h1>Today's Forecast</h1>
    <div v-if="!store.state.loading">
      <p>{{ conditions.comment }} today</p>
      <p>Currently {{ conditions.temp.c }}&deg;C</p>
      <p>Chance of rain: {{ conditions.precip }}</p>
      <p>Humidity: {{ conditions.humidity }}</p>
      <img :src="conditions.iconURL" :alt="conditions.comment" />
    </div>
    <div v-else>Loading...</div>
  </section>
</template>

<style scoped>
/*  */
</style>
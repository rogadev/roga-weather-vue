<script setup>
import { computed } from "vue";

import { store } from "../store";

const conditions = computed(() => {
  return store.state.weather.currentConditions;
});
</script>

<template>
  <section class="mb-4 border rounded-md shadow-md bg-slate-50 py-3">
    <div v-if="!store.state.loading">
      <h2 class="bold text-2xl">Today's Forecast</h2>
      <h3 class="text-xl">{{ store.state.location }}</h3>
      <img
        class="mx-auto"
        :src="conditions.iconURL"
        :alt="conditions.comment"
      />
      <p>{{ conditions.comment }} today</p>
      <p>Currently {{ conditions.temp.c }}&deg;C</p>
      <p>Chance of rain: {{ conditions.precip }}</p>
      <p>Humidity: {{ conditions.humidity }}</p>
    </div>
    <div v-else>Loading Current Conditions...</div>
  </section>
</template>

<style scoped>
/*  */
</style>
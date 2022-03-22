<script setup>
import { computed } from "vue";

import { store } from "../store";

const forecast = computed(() => {
  console.log({ ...store.state.weather.next_days });
  return store.state.weather.next_days;
});
</script>

<template>
  <section class="mb-4 border rounded-md shadow-md bg-slate-50 py-3">
    <h2 class="pb-3 text-2xl">Forecast This Week</h2>
    <div
      v-if="!store.state.loading"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6"
    >
      <div
        v-for="(weather, _, index) of forecast"
        :key="index"
        class="mx-auto rounded-md mb-4 p-3"
      >
        <h3>{{ weather.day }}</h3>
        <h4>{{ weather.comment }}</h4>
        <h4>
          {{ weather.min_temp.c }}&deg;C to {{ weather.max_temp.c }}&deg;C
        </h4>
        <img class="mx-auto" :src="weather.iconURL" :alt="weather.comment" />
      </div>
    </div>
    <div v-else>Loading...</div>
  </section>
</template>

<style scoped>
/*  */
</style>
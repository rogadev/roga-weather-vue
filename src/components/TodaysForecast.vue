<script setup>
import { defineProps } from "vue";

import { store } from "../store";

const props = defineProps({
  conditions: {
    type: Object,
    default: () => ({}),
  },
});

console.log("Props: TodaysForecast.vue", props.conditions);

setTimeout(() => {
  console.log("Props: TodaysForecast.vue after timeout", props.conditions);
}, 2000);
</script>

<template>
  <section>
    <h1>Today's Forecast</h1>
    <p>{{ comment }} today</p>
    <p>Currently {{ currentTemp }} degrees C</p>
    <p>Chance of rain: {{ precip }}%</p>
    <p>Humidity: {{ humidity }}%</p>
    <img :src="icon" :alt="comment" />
  </section>
</template>

<style scoped>
/*  */
</style>
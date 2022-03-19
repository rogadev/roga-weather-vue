<script setup>
import { defineProps } from "vue";

defineProps({
  currentTemp: {
    default: "",
  },
  precip: {
    default: "",
  },
  humidity: {
    default: "",
  },
  wind: {
    default: 0,
  },
  icon: {
    default: "",
  },
  comment: {
    default: "Shitty weather",
  },
});
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
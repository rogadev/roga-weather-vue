<script setup>
import { defineProps } from "vue";

defineProps({
  currentTemp: {
    type: String,
    default: "",
  },
  precip: {
    type: String,
    default: "",
  },
  humidity: {
    type: String,
    default: "",
  },
  wind: {
    type: Number,
    default: 0,
  },
  icon: {
    type: String,
    default: "",
  },
  comment: {
    type: String,
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
    <img :src="iconURL" :alt="comment" />
  </section>
</template>

<style scoped>
/*  */
</style>
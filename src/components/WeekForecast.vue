<script setup>
import { ref } from "vue";
import { store } from "../store";

const forecast = ref(store.state.weather.next_days);
</script>

<template>
  <div>
    <h1>Forecast This Week</h1>
    <p>{{ forecast }}</p>
  </div>
</template>

<style scoped>
/*  */
</style>
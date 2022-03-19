<script setup>
import { ref } from "vue";
import { store } from "../store";

const forecast = ref(store.state.todaysForecast);
</script>

<template>
  <h1>Forecast This Week</h1>
  <p>{{ forecast }}</p>
</template>

<style scoped>
/*  */
</style>
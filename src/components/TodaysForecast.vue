<script setup>
import { ref } from "vue";
import { store } from "../store";

const conditions = ref(store.state.todaysForecast);
</script>

<template>
  <section>
    <h1>Today's Forecast</h1>
    <p>{{ conditions }}</p>
  </section>
</template>

<style scoped>
/*  */
</style>
<script setup>
import TodaysForecast from "./components/TodaysForecast.vue";
import WeekForecast from "./components/WeekForecast.vue";
</script>

<template>
  <header>
    <h1>Current Local Forecast</h1>
    <p>Developed by Ryan Roga</p>
  </header>
  <main>
    <TodaysForecast />
    <WeekForecast />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

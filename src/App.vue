<script setup>
import TodaysForecast from "./components/TodaysForecast.vue";
import WeekForecast from "./components/WeekForecast.vue";
import ChangeLocation from "./components/ChangeLocation.vue";
import Loading from "./components/Loading.vue";

import { ref, onErrorCaptured } from "vue";

const error = ref(null);
const errorCaptured = ref(false);

/**
 * Vue function that captures any errors that occured in async functions, sets the error flag to true, and sets our error message to display in the UI. Also console errors the error.
 */
onErrorCaptured((e) => {
  console.error(e);
  error.value = e;
  errorCaptured.value = true;
});

/**
 * Clears the error message and resets the errorCaptured flag.
 */
const clearError = () => {
  error.value = null;
  errorCaptured.value = false;
};
</script>

<template>
  <header>
    <h1>Current Local Forecast</h1>
    <p>Developed by Ryan Roga</p>
  </header>
  <main>
    <ChangeLocation />
    <Suspense>
      <!-- nested async dependencies -->
      <TodaysForecast />
      <WeekForecast />
      <!-- fallback/loading state -->
      <template #fallback>
        <Loading... />
      </template>
      <div class="error" v-if="errorCaptured">{{ error }}</div>
    </Suspense>
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

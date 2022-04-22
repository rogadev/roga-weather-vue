<script setup>
import Weather from "./components/Weather.vue";
import Loading from "./components/Loading.vue";
</script>

<template>
  <header class="mt-9 mb-6 font-bold">
    <h1 class="text-4xl md:text-5xl mb-4">Current Local Forecast</h1>
    <div class="text-xl md:text-base">
      <small
        ><span class="hidden md:inline-block">Created by&nbsp;</span
        ><a
          href="https://www.roga.dev"
          class="text-blue-500 font-bold"
          target="blank"
          >Ryan Roga</a
        ></small
      >
      |
      <small
        ><span class="hidden md:inline-block">View the repo on&nbsp;</span
        ><a
          class="font-bold text-blue-500"
          href="https://github.com/rogadev/roga-weather-vue"
          target="blank"
          >GitHub</a
        >
      </small>
      |
      <small
        ><span class="hidden md:inline-block">This project uses the&nbsp;</span>
        <a
          class="font-bold text-blue-500"
          href="https://weatherdbi.herokuapp.com"
          target="blank"
          >WeatherDB API</a
        >
      </small>
    </div>
  </header>
  <main class="mx-auto w-4/5 p-2">
    <Suspense>
      <template #default>
        <Weather />
      </template>
      <template #fallback>
        <Loading />
      </template>
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

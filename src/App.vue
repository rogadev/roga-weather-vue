<script setup>
import Weather from "./components/Weather.vue";
import Loading from "./components/Loading.vue";
</script>

<template>
  <header class="mb-2">
    <h1 class="text-4xl font-bold pt-4 pb-1">Current Local Forecast</h1>
    <small class="font-bold"
      >Created by Ryan Roga |
      <a href="https://www.roga.dev" class="text-blue-500 font-bold"
        >Roga.dev</a
      ></small
    ><br />
    <a
      class="text-blue-500 font-bold"
      href="https://github.com/rogadev/roga-weather-vue"
      target="blank"
      >View repo on GitHub</a
    >
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

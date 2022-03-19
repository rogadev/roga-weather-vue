<script setup>
import ChangeLocation from "./components/ChangeLocation.vue";
import Weather from "./components/Weather.vue";
import Loading from "./components/Loading.vue";
</script>

<template>
  <div>
    <header>
      <h1>Current Local Forecast</h1>
      <small
        >Developed by Ryan Roga |
        <a href="https://www.roga.dev">Roga.dev</a></small
      >
    </header>
    <main>
      <ChangeLocation />
      <Suspense>
        <template #default>
          <Weather />
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </main>
  </div>
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

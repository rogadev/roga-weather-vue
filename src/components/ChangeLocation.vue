<script setup>
import { ref } from "vue";
import { store } from "../store";
import { useSlug } from "../composables/useSlug";
import { fetchWeather } from "../utils/fetchWeather";

const location = ref(store.state.location);

const changeLocation = async () => {
  store.state.location = location.value.toString();
  store.state.locationSlug = useSlug(location.value).slug.toString();
  await fetchWeather();
};
</script>

<template>
  <div class="container mb-2 border py-2 rounded bg-slate-50 shadow-md">
    <h2 class="text-2xl mb-2">Change Location</h2>
    <div class="py-1">
      <input
        class="border rounded-sm px-2 py-1 mr-4"
        type="text"
        id="location"
        name="location"
        v-model="location"
        @keyup.enter="changeLocation"
      />
      <button
        type="button"
        @click="changeLocation"
        class="border rounded-md bg-blue-100 px-2 py-1 shadow"
      >
        Get Weather
      </button>
    </div>
  </div>
</template>

<style scoped>
/*  */
</style>
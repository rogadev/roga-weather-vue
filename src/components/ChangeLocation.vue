<script setup>
import { ref } from "vue";
import { store } from "../store";

const location = ref(store.state.location);

const changeLocation = () => {
  store.state.location = location.value;
  location.value = "";
};
</script>

<template>
  <div class="container">
    <h2>Change Location</h2>
    <input type="text" id="location" name="location" v-model="location" />
    <button type="button" @click="changeLocation">Change Location</button>
  </div>
</template>

<style scoped>
/*  */
</style>
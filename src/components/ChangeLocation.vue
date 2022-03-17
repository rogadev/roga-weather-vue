<script setup>
import { ref } from "vue";

const location = ref("");
</script>

<template>
  <div class="container">
    <h2>Change Location</h2>
    <input type="text" id="location" v-model="location" />
    <button type="button" @click="changeLocation">Change Location</button>
  </div>
</template>

<style scoped>
/*  */
</style>
<script setup>
import { useWebStore } from "../store/WebStore.js";
const webStore = useWebStore();
</script>
<template>
  <div class="flex flex-col px-10 lg:grid lg:grid-cols-2 w-full items-center">
    <p
      class="w-full flex flex-wrap lg:pl-20 text-center text-xs text-gray-400 font-thin"
    >&copy; {{webStore.brand}} 2016. All Rights Reserved | Website by.. <span class="text-black font-bold"> {{webStore.developer}}</span></p>
    <nav class="flex flex-wrap w-full lg:justify-end items-center space-x-4 lg:mr-6 p-1 lg:p-4">
      <RouterLink
        v-bind:to="{ name: 'Home' }"
        class="text-gray-600 text-sm font-semibold uppercase hover:text-green-600"
        >Home</RouterLink
      >
      <RouterLink
        v-bind:to="{ name: 'Services' }"
        class="text-gray-600 text-sm font-semibold uppercase hover:text-green-600"
        >our services</RouterLink
      >
      <RouterLink
        v-bind:to="{ name: 'Booking' }"
        class="text-gray-600 text-sm font-semibold uppercase hover:text-green-600"
        >book a vehicle</RouterLink
      >
      <RouterLink
        v-bind:to="{ name: 'Contact' }"
        class="text-gray-600 text-sm font-semibold uppercase hover:text-green-600"
        >Contact us</RouterLink
      >
      <a
        href="#tops"
        title="Go to top"
        class="self-end px-3 py-1 text-xl text-white bg-gray-400 hover:bg-green-600"
        >^</a
      >
    </nav>
  </div>
</template>
<style scoped>
.router-link-active {
  color: green;
}
</style>

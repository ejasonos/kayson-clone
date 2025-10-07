<script setup>
import { useWebStore } from "../store/WebStore.js";
const webStore = useWebStore();
</script>
<template>
  <section class="flex flex-col xl:p-20 bg-gray-200">
        <ul id="tops"
      class="flex flex-wrap items-center justify-around py-10 gap-y-10 xl:grid xl:grid-cols-3"
    >
      <li
        v-for="service in webStore.vehicleServicesA"
        v-bind:key="service.id"
        class="flex justify-center items-center"
      >
        <div class="relative w-[300px] flex flex-col justify-center p-6 m-2 xl:p-10 bg-white">
          <div
            class="absolute -top-8 flex justify-center self-center p-4 h-16 w-16 bg-green-600 rounded-sm"
          >
            <img v-bind:src="service.image" class="filter invert-95" />
          </div>
          <div class="flex flex-col space-y-2 mt-3">
            <p class="text-md text-center text-gray-600 font-semibold">
              {{ service.title }}
            </p>
            <p class="text-xs font-semibold text-gray-800/50 text-center">
              {{ service.info }}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <ul
      class="flex flex-wrap items-center justify-around py-10 gap-y-10 xl:grid xl:grid-cols-3"
    >
      <li
        v-for="service in webStore.vehicleServicesB"
        v-bind:key="service.id"
        class="flex justify-center items-center"
      >
        <div class="relative w-[300px] flex flex-col justify-center p-6 m-2 xl:p-10 bg-white">
          <div
            class="absolute -top-8 flex justify-center self-center p-4 h-16 w-16 bg-green-600 rounded-sm"
          >
            <img v-bind:src="service.image" class="filter invert-95" />
          </div>
          <div class="flex flex-col space-y-2 mt-3">
            <p class="text-md text-center text-gray-600 font-semibold">
              {{ service.title }}
            </p>
            <p class="text-xs font-semibold text-gray-800/50 text-center">
              {{ service.info }}
            </p>
          </div>
        </div>
      </li>
    </ul>

    <div
      class="flex justify-center text-center text-lg text-white font-bold bg-green-800 hover:bg-gray-800 py-6 uppercase mt-10"
    >
      <p>Happy with what you see? Great! Make your Booking now!</p>
    </div>
  </section>
</template>

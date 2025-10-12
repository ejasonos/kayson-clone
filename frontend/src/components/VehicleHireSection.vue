<script setup>
import { useWebStore } from '../store/WebStore.js'
const webStore = useWebStore()
</script>
<template>
  <section class="flex flex-col w-full py-10">
    <div id="tops"
      class="text-lg text-black font-bold uppercase self-center w-fit flex flex-col justify-center items-center gap-y-2"
    >
      Our Vehicle Hire Services
      <div
        class="h-1 w-1/2 border border-green-600 bg-green-600 rounded-full"
      ></div>
    </div>
    <div class="flex flex-col lg:flex-row  gap-10 p-10 xl:mx-40">
      <ul class="lg:w-3/5 flex flex-col space-y-7">
        <li v-for="service in webStore.vehicleServicesA" :key="service.title" class="flex space-x-4">
          <div>
            <p
              class="text-md font-semibold text-black text-right flex lg:justify-end items-center gap-x-2"
            >
              {{ service.title }}
            </p>
            <p class="text-md lg:text-right font-normal text-gray-600">{{ service.info }}
            </p>
          </div>
          <img
            class="h-5 w-5 mt-1 block filter invert-65"
            v-bind:src="service.image"
          />
        </li>
      </ul>
      <ul class="lg:w-3/5 flex flex-col items-start space-y-7">
        <li v-for="service in webStore.vehicleServicesB" :key="service.title" class="flex space-x-4">
          <img class="h-5 w-5 mt-1 block filter invert-65" v-bind:src="service.image" />
          <div>
            <p
              class="text-md font-semibold text-black flex items-center gap-x-2"
            >
              {{ service.title }}
            </p>
            <p class="text-md font-normal text-gray-600">
              {{ service.info }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

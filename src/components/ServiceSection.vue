<script setup>
// import { services } from "../store/WebStore.ts"
import { useWebStore } from "../store/WebStore.js";
const webStore = useWebStore();
</script>
<template>
  <section id="tops" class="relative bg-gray-200 py-20 xl:p-20">
    <div class="flex items-center h-[500px]">
      <div
        class="border mx-4 h-fit w-1/12 flex justify-center items-center bg-gray-600 text-white hover:bg-gray-400 hover:text-white hover:font-semibold cursor-default"
      >
        <
      </div>
      <ul class="flex w-10/12 h-fit overflow-hidden">
        <li
          v-for="s in webStore.services"
          v-bind:key="s.title" v-bind:id="s.id"
          class="relative flex justify-center items-center h-[500px] w-full flex-shrink-0"
        >
          <img v-bind:src="s.image" class="h-full w-full sobject-cover" />
          <div
            class="absolute bottom-0 mb-4 flex flex-col space-y-3 justify-center items-center"
          >
            <p class="text-green-700 text-2xl xl:text-4xl font-bold uppercase bg-white p-2">
              {{ s.title }}
            </p>
            <span
              class="bg-green-700 text-2xl xl:text-4xl rounded shadow-lg px-4 py-2 text-white font-bold uppercase hover:transition-all hover:scale-105"
              >{{ s.button }}</span
            >
          </div>
        </li>
      </ul>
      <div
        class="border mx-4 w-1/12 h-fit flex justify-center items-center bg-gray-600 text-white hover:bg-gray-400 hover:font-semibold cursor-default">
        >
      </div>

      <!-- The three circles indicating the service being displayed -->
      <div class="absolute bottom-10 left-0 flex w-full justify-center items-center space-x-2">
          <a v-for="sto in webStore.services" :key="sto.title"
            v-bind:href="'#'+sto.id"
            class="h-3 w-3 rounded-full border-2 border-gray-400 bg-white focus:bg-gray-400"
          ></a>
      </div>
    </div>
  </section>
</template>

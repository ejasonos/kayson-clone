<script setup lang="ts">
import { useWebStore } from "../store/WebStore.ts";
const webStore = useWebStore();
</script>
<template>
  <section class="relative flex flex-col space-y-10 p-10 bg-gray-200 w-[100%]">
    <div
      class="text-lg text-black font-bold uppercase self-center w-fit flex flex-col justify-center items-center gap-y-2"
    >
      What people are saying about us
      <div
        class="h-1 w-1/2 border border-green-600 bg-green-600 rounded-full"
      ></div>
    </div>

    <div class="flex">
      <!-- Items from the store-->
      <ul class="flex overflow-hidden">
        <!-- Change this to a component, access details from store -->
        <li v-for="t in webStore.testimonial" :key="t.id"
          v-bind:id="t.id"
          class="flex flex-col flex-shrink-0 self-center w-[100%] justify-center items-center gap-y-5"
        >
          <p class="text-md text-gray-600 text-center font-normal">
            {{ t.comment }}
          </p>
          <div class="h-15 w-15 rounded-full overflow-hidden">
            <img class="h-full w-full" v-bind:src="t.image" />
          </div>
          <div class="flex flex-col">
            <p class="text-md font-bold text-black text-center">{{ t.name }}</p>
            <p class="text-sm font-thin text-gray-600 text-center">
              {{ t.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex w-[100%] justify-center items-center space-x-2">
      <a v-for="t in webStore.testimonial"
        v-bind:href="'#'+t.id"
        class="h-3 w-3 rounded-full border-2 border-gray-400 bg-white focus:bg-gray-400"
      ></a>
    </div>
  </section>
</template>